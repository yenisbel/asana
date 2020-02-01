# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Team.destroy_all
Membership.destroy_all
Project.destroy_all
Task.destroy_all
Column.destroy_all

user1 = User.create(username: 'test1', password: 'password1', full_name: 'Cindy Loop')
user2 = User.create(username: 'user@abc.com', password: 'password1', full_name: 'Louise Loop')
user3 = User.create(username: 'test3', password: 'password1', full_name: 'Steve Loop')

# require 'faker'

# user1 = User.create(email: Faker::Internet.email, password: 'password')
# user2 = User.create(email: Faker::Internet.email, password: 'password')
# user3 = User.create(email: Faker::Internet.email, password: 'password')



team1 = Team.create(name: 'team1', description: 'advisor team')
team2 = Team.create(name: 'team2', description: 'call center')
team3 = Team.create(name: 'team3', description: 'quality support')

member1 = Membership.create(member_id: user1.id, team_id: team1.id)
member2 = Membership.create(member_id: user2.id, team_id: team1.id)
member3 = Membership.create(member_id: user1.id, team_id: team2.id)

project1 = Project.create(name: 'project1', team_id: team2.id, description: 'project1 for advisor team')
project2 = Project.create(name: 'project2', team_id: team2.id, description: 'project2 for advisor team')

column1 = Column.create(name: 'column1', project_id: project1.id)
column2 = Column.create(name: 'column2', project_id: project1.id)
column3 = Column.create(name: 'column3', project_id: project2.id)


task1 = Task.create(title: 'task1', project_id: project1.id, author_id: user1.id, column_id: column1.id , description: 'seek speakers for advisor team conference')
task2 = Task.create(title: 'task2', project_id: project1.id, author_id: user1.id, column_id: column2.id , description: 'seek speakers for IT team conference')
task3 = Task.create(title: 'task3', project_id: project2.id, author_id: user2.id, column_id: column1.id , description: 'seek speakers for Invesment Fundraiser event')