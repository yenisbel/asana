class TeamMember < ApplicationRecord
    validates :team_id, :member_id, presence: true
    validates :member_id, uniqueness: {scope: :team_id, message: "This member already exist in the team" }
   

    belongs_to :member, 
        class_name: "User",
        foreign_key: :member_id,
        primary_key: :id

    belongs_to :team
end
