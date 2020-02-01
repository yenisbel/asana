class AddIndexNameToTeams < ActiveRecord::Migration[5.2]
  def change
    add_index :teams, :name
  end
end
