class Team < ApplicationRecord
    validates :name, presence: true, uniqueness: true

    has_many :memberships,
        class_name: 'TeamMember',
        foreign_key: :team_id,
        primary_key: :id

    has_many :members,
        through: :memberships,
        source: :member

    has_many :projects,
        class_name: 'Project',
        foreign_key: :team_id

end

