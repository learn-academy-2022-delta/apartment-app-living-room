# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


user1 = User.where(email: 'example@gmail.com').first_or_create(password: 'valid_password', password_confirmation: 'valid_password')

user2 = User.create(email: 'example2@gmail.com', password: 'valid_password', password_confirmation: 'valid_password')


apartments1 = [
    {
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
    },
    {
        street: '4302 Palm Ave',
        city: 'La Mesa',
        state: 'CA',
        manager: 'Jim',
        email: 'Jim@gmail.com',
        price: '2275',
        bedrooms: 1,
        bathrooms: 1,
        pets: 'no',
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    }
]

apartments2 = [
    {
        street: '4300 Echo St',
        city: 'La Mesa',
        state: 'CA',
        manager: 'Jane',
        email: 'Jane@gmail.com',
        price: '2600',
        bedrooms: 2,
        bathrooms: 2,
        pets: 'yes',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    }
]

apartments1.each do |attributes|
    user1.apartments.create(attributes)
    p "Creating apartment #{attributes}"
end

apartments2.each do |attributes|
    user2.apartments.create(attributes)
    p "Creating apartment #{attributes}"
end
