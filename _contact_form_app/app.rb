require 'sinatra'
require 'mail'
require 'securerandom'

enable :sessions  # Enable session support

configure do
  set :port, 4567

  # Configure Mail gem to use AWS SES SMTP settings
  Mail.defaults do
    delivery_method :smtp, {
      address: 'email-smtp.us-east-1.amazonaws.com',
      port: 587,
      user_name: ENV['SES_SMTP_USERNAME'],
      password: ENV['SES_SMTP_PASSWORD'],
      authentication: :login,
      enable_starttls_auto: true
    }
  end
end

before '/submit_form' do
  # Generate a simple math problem
  if session[:captcha_answer].nil?
    num1 = rand(1..10)
    num2 = rand(1..10)
    session[:captcha_answer] = num1 + num2
    session[:captcha_question] = "#{num1} + #{num2}"
  end
end

get '/contact' do
  erb :contact, locals: { captcha_question: session[:captcha_question] }
end

post '/submit_form' do
  name = params[:name]
  email = params[:email]
  message = params[:message]
  honeypot = params[:honeypot]
  captcha = params[:captcha]

  # Check honeypot field
  if honeypot && !honeypot.empty?
    halt 400, "Error: Form submission detected as spam."
  end

  # Validate CAPTCHA
  if captcha.to_i != session[:captcha_answer].to_i
    halt 400, "Error: CAPTCHA validation failed."
  end

  # Clear the CAPTCHA from session after use
  session[:captcha_answer] = nil

  mail = Mail.new do
    from    'jordanlagan000@gmail.com'
    to      'jordanlagan000@gmail.com'
    subject 'New Contact Form Submission'
    body    "Name: #{name}\nEmail: #{email}\nMessage: #{message}"
  end

  if mail.deliver
    redirect '/contact-thank-you'
  else
    redirect '/contact-error'
  end
end
