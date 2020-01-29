# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Bench.destroy_all

user1 = User.create(email: 'test1', password: 'password1', full_name: 'Cindy Loop')
user2 = User.create(email: 'user@abc.com', password: 'password1', full_name: 'Louise Loop')
user3 = User.create(email: 'test3', password: 'password1', full_name: 'Steve Loop')

# require 'faker'

# user1 = User.create(email: Faker::Internet.email, password: 'password')
# user2 = User.create(email: Faker::Internet.email, password: 'password')
# user3 = User.create(email: Faker::Internet.email, password: 'password')



bench1 = Bench.create(description: 'bench1', lat: 1.1, lng: 1.1)
bench2 = Bench.create(description: 'bench2', lat: 2.2, lng: 2.2)
bench3 = Bench.create(description: 'bench3', lat: 3.3, lng: 3.3)