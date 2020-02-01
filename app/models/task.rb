# == Schema Information
#
# Table name: tasks
#
#  id          :bigint(8)        not null, primary key
#  description :text
#  title       :string           not null
#  author_id   :integer          not null
#  assignee_id :integer
#  column_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  completed   :boolean
#  due_date    :date
#

class Task < ApplicationRecord
  validates :title, :author_id, :column_id, presence: true

  belongs_to :column

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :assignee,
    foreign_key: :assignee_id,
    class_name: :User,
    optional: true

  has_one :project,
    through: :column,
    source: :project
end
