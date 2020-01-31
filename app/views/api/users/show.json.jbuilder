json.user do
    json.extract! @user, :id, :email
end

json.team do
    json.extract! @team, :id, :name
end