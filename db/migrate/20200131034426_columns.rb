class Columns < ActiveRecord::Migration[5.2]
  def change
    create_table :columns do |t|
      t.string :name, null: false
      t.integer :project_id, null: false
      t.timestamps
    end
  end
end
