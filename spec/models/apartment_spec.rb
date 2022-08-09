require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'check that Apartment exists' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'123456789')

   apartment = Apartment.create city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image', user_id: user.id
    expect(apartment.errors[:street]).to_not be_empty
  end
end