require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'check that Apartment exists' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
    expect(apartment).to be_valid
  end
end