require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'check that Apartment exists' do
    apartment = Apartment.create city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image', user_id: 1
    expect(apartment.errors[:street]).to_not be_empty
  end
end