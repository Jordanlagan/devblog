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

  # Check honeypot field
  if honeypot && !honeypot.empty?
    halt 400, "Error: Form submission detected as spam."
  end

  mail = Mail.new do
    from    'jordanlagan000@gmail.com'   # This email must be verified in SES
    to      'jordanlagan000@gmail.com'
    subject 'New Contact Form Submission'
    body    "Name: #{name}\nEmail: #{email}\nMessage: #{message}"
  end

  if mail.deliver
    redirect '/thank_you'
  else
    redirect '/error'
  end
end

get '/thank_you' do
  <<-HTML
  <div style="text-align: center; padding: 20px;">
    <h1>Thank You!</h1>
    <p>Your message has been sent successfully. I'll get back to you shortly.</p>
    <a href="/" style="color: blue; text-decoration: underline;">Back to homepage</a>
  </div>
  HTML
end

get '/error' do
  <<-HTML
  <div style="text-align: center; padding: 20px;">
    <h1>Oops!</h1>
    <p>Something went wrong. Please try again later.</p>
    <a href="/contact" style="color: blue; text-decoration: underline;">Go back to the contact form</a>
  </div>
  HTML
end
