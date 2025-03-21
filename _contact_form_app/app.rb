require 'sinatra'
require 'mail'

configure do
  set :port, 4567

  # Configure Mail gem to use AWS SES SMTP settings
  Mail.defaults do
    delivery_method :smtp, {
      address: 'email-smtp.us-east-1.amazonaws.com', # e.g., 'email-smtp.us-east-1.amazonaws.com'
      port: 587,                                       # Can also use 465 for SSL
      user_name: ENV['SES_SMTP_USERNAME'],             # Use the SMTP username from SES
      password: ENV['SES_SMTP_PASSWORD'],              # Use the SMTP password from SES
      authentication: :login,                          # Use :login or :plain based on SES SMTP
      enable_starttls_auto: true                       # Use TLS
    }
  end
end

post '/submit_form' do
  name = params[:name]
  email = params[:email]
  message = params[:message]
  honeypot = params[:honeypot]
  captcha = params[:captcha].to_i
  captcha_answer = params[:captcha_answer].to_i

  # Check honeypot field
  if honeypot && !honeypot.empty?
    halt 400, "Error: Form submission detected as spam."
  end

  # Validate CAPTCHA
  if captcha != captcha_answer
    halt 400, "Error: CAPTCHA validation failed."
  end

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
