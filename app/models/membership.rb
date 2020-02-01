# == Schema Information
#
# Table name: memberships
#
#  id         :bigint(8)        not null, primary key
#  member_id  :integer          not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :member_id, :team_id, presence: true

  belongs_to :member,
    foreign_key: :member_id,
    class_name: :User

  belongs_to :team,
    foreign_key: :team_id,
    class_name: :Team
end
