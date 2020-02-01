class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.integer :project_id, null: false
      t.date :due_on
      t.boolean :completed
      t.integer :assignee_id
      
      t.timestamps
    end
  end
end
