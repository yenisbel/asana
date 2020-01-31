class Task < ApplicationRecord
    validates :title, :author_id, :project_id, presence: true
    

    belongs_to :author,
     class_name: 'User',
     foreign_key: :author_id

    belongs_to :assignee,
     class_name: 'User',
     foreign_key: :assignee_id,
     optional: true

    belongs_to :project
end
