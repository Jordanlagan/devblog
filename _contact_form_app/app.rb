require 'sinatra'
require 'mail'

configure do
  set :port, 4567

  Mail.defaults do
    delivery_method :smtp, {
      address: "smtp.gmail.com",
      port: 587,
      user_name: ENV["EMAIL_USER"],
      password: ENV["EMAIL_PASSWORD"],
      authentication: 'plain',
      enable_starttls_auto: true
    }
  end
end

post '/submit_form' do
  name = params[:name]
  email = params[:email]
  message = params[:message]

  mail = Mail.new do
    from    email
    to      ENV["EMAIL_USER"]
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

