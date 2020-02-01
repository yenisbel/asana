class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.integer :team_id, null: false
      t.string :name, null: false
      t.string :description, null: false

      t.timestamps
    end
  end
end
