require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it "get a list of apartments" do
        user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
        user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image', user_id: 1
        get '/apartments'
        apartment = JSON.parse(response.body)
        expect(response).to have_http_status(200)
        expect(apartment.length).to eq 1
      end    
  end
end