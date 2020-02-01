# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  team_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  color       :string
#

class Project < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, :team_id, presence: true

  # team id will serve as user id for now
  belongs_to :team


  has_many :columns,
    dependent: :destroy

  has_many :tasks,
    through: :columns,
    source: :tasks,
    dependent: :destroy
end
