json.user do
  json.extract! @user, :id, :username, :photo_url, :full_name
end

json.team do
  json.extract! @current_team, :id, :name, :member_ids
end
