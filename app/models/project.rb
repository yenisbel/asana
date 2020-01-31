class Project < ApplicationRecord
    validates :name, :team_id, :description, presence: true
    validates :team_id, uniqueness: true
    belongs_to :team

    has_many :tasks,
        class_name: 'Task',
        foreign_key: :project_id

    
end
