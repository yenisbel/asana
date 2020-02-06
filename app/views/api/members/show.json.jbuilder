json.member do
    json.team_id  @current_team&.id
    json.extract! @member, :id, :username, :full_name
end