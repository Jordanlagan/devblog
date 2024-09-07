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

  mail = Mail.new do
    from    'your-verified-email@domain.com'   # This email must be verified in SES
    to      'recipient-email@example.com'
    subject 'New Contact Form Submission'
    body    "Name: #{name}\nEmail: #{email}\nMessage: #{message}"
  end

  if mail.deliver
    "Thank you for your message. We will get back to you soon."
  else
    "There was an error sending your message. Please try again later."
  end
end

get '/thank_you' do
  "Thank you for your message. We will get back to you soon."
end
