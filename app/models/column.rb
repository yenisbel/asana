# == Schema Information
#
# Table name: columns
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Column < ApplicationRecord
  validates :name, :project_id, presence: true

  belongs_to :project

  has_many :tasks
end
