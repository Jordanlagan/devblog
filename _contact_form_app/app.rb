require 'sinatra'
require 'aws-sdk-ses'

configure do
  set :port, 4567

  Aws.config.update({
    region: 'us-east-1', # e.g., 'us-east-1'
    credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
  })
  set :ses, Aws::SES::Client.new
end

post '/submit_form' do
  name = params[:name]
  email = params[:email]
  message = params[:message]

  ses = settings.ses
  begin
    ses.send_email({
      destination: { to_addresses: ['jordanlagan000@gmail.com'] },
      message: {
        body: { text: { data: "Name: #{name}\nEmail: #{email}\nMessage: #{message}" }},
        subject: { data: 'New Contact Form Submission' }
      },
      source: 'jordanlagan000@gmail.com'
    })
    "Thank you for your message. We will get back to you soon."
  rescue Aws::SES::Errors::ServiceError => error
    "There was an error sending your message: #{error.message}"
  end
end

get '/thank_you' do
  "Thank you for your message. We will get back to you soon."
end
