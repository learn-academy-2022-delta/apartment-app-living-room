require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it "gets a list of apartments" do
      Apartment.create(
        street: '4341 Spring St',
        city: 'La Mesa',
        state: 'CA',
        manager: 'John',
        email: 'John@gmail.com',
        price: '1900',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'no',
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80'
      )

      get '/apartments/'
      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 0
    end
  end
end

