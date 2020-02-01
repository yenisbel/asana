json.user do
  json.extract! @user, :id, :username
end

json.team do
  json.extract! @team, :id, :name, :member_ids
end
