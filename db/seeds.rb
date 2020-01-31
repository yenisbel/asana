# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Team.destroy_all
TeamMember.destroy_all
Project.destroy_all
Task.destroy_all

user1 = User.create(email: 'test1', password: 'password1', full_name: 'Cindy Loop')
user2 = User.create(email: 'user@abc.com', password: 'password1', full_name: 'Louise Loop')
user3 = User.create(email: 'test3', password: 'password1', full_name: 'Steve Loop')

# require 'faker'

# user1 = User.create(email: Faker::Internet.email, password: 'password')
# user2 = User.create(email: Faker::Internet.email, password: 'password')
# user3 = User.create(email: Faker::Internet.email, password: 'password')



team1 = Team.create(name: 'team1', description: 'advisor team')
team2 = Team.create(name: 'team2', description: 'call center')
team3 = Team.create(name: 'team3', description: 'quality support')

member1 = TeamMember.create(member_id: user1.id, team_id: team1.id)
member2 = TeamMember.create(member_id: user2.id, team_id: team1.id)

project1 = Project.create(name: 'project1', team_id: team1.id, description: 'project for advisor team')

task1 = Task.create(title: 'task1', project_id: project1.id, author_id: user1.id, assignee_id: user2.id, description: 'seek speakers for advisor team conference')