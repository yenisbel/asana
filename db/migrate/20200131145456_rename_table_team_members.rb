class RenameTableTeamMembers < ActiveRecord::Migration[5.2]
  def change
    rename_table :team_members, :memberships
  end
end
