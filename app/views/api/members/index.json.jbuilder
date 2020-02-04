@members.each do |member|
  json.set! member.id do
    json.team_id  @current_team&.id
    json.extract! member, :id, :username
  end
end