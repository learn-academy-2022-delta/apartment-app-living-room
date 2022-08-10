require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it 'check that Apartment exists' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
    expect(apartment).to be_valid
  end

  it 'checks a street is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
  expect(apartment.errors{:street}).to_not be_empty
  end

  it 'checks a city is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
  expect(apartment.errors{:city}).to_not be_empty
  end

  it 'checks a state is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
  expect(apartment.errors{:state}).to_not be_empty
  end

  it 'check that manager is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
    expect(apartment.errors{:manager}).to_not be_empty
  end

  it 'check that email is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
    expect(apartment.errors{:email}).to_not be_empty
  end

  it 'check that price is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', bedrooms: 1, bathrooms: 1, pets: '0', image: 'image'
    expect(apartment.errors{:price}).to_not be_empty
  end

  it 'check that bedrooms is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bathrooms: 1, pets: '0', image: 'image'
    expect(apartment.errors{:bedrooms}).to_not be_empty
  end

  it 'check that bathrooms is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, pets: '0', image: 'image'
    expect(apartment.errors{:bathrooms}).to_not be_empty
  end

  it 'check that pets is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, image: 'image'
    expect(apartment.errors{:pets}).to_not be_empty
  end

  it 'check that image is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0'
    expect(apartment.errors{:image}).to_not be_empty
  end

  it 'check that user_id is inputted' do
    user = User.where(email: 'test@example.com').first_or_create(password:'12345678', password_confirmation:'12345678')
    apartment = user.apartments.create street: "1234 Street Lane", city: 'San Diego', state: 'CA', manager: 'Elyse', email: 'elyse_manager@email.com', price: '3000', bedrooms: 1, bathrooms: 1, pets: '0'
    expect(apartment.errors{:user_id}).to_not be_empty
  end
end