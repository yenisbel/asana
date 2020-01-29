class DropTablename < ActiveRecord::Migration[5.2]
  def change
    drop_table :benches
  end
end
