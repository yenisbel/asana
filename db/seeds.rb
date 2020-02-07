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

user1 = User.create(username: 'cindy@abc.com', password: 'password1', full_name: 'Cindy Loop')
user2 = User.create(username: 'louise@abc', password: 'password1', full_name: 'Louise Loop')
user3 = User.create(username: 'steve', password: 'password1', full_name: 'Steve Loop')
user4 = User.create(username: 'dchan', password: 'password1', full_name: 'David Chan')

demo = User.create!({username: 'Demo', password: 'password', full_name: 'Monica S'});
demoteam = Team.create!({name: 'Demo Team'})
demomember = Membership.create!(member_id: demo.id, team_id: demoteam.id)
demoproject = Project.create(name: 'Test Automation Development Project', team_id: demoteam.id, description: 'to guide the initial tasks necessary for developing a Software Test Automation project')
democolumn1 = Column.create(name: 'To Do', project_id: demoproject.id)
democolumn2 = Column.create(name: 'In Progress', project_id: demoproject.id)
democolumn3 = Column.create(name: 'Done', project_id: demoproject.id)
demotask1 = Task.create(title: 'Review Application that will be tested.', project_id: demoproject.id, assignee_id: user1.id , author_id: demo.id, column_id: democolumn1.id , description: 'where data is written and needs to be accessed by automation, what tech stack is needed for automation test environment')
demotask2 = Task.create(title: 'Create an Automation Team project board', project_id: demoproject.id, assignee_id: user2.id , author_id: demo.id, column_id: democolumn2.id , description: 'to know who is doing what, when and where, and if problems need to be resolved, should be visible to everyone so the team is aware of progress')
demotask3 = Task.create(title: 'Create a repository to store automation code', project_id: demoproject.id, author_id: demo.id, column_id: democolumn2.id , description: 'Where will the automation code be stored? Would expect this to be in its own repository')
demotask4 = Task.create(title: 'Configure your automation development workspace app or tool', project_id: demoproject.id, author_id: demo.id, column_id: democolumn3.id , description: 'to build automation scripts will need to be configure and setup to be able to check in and out code from the repository')



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