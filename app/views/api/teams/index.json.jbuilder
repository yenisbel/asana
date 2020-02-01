@teams.each do |team|
  json.set! team.id do
    json.extract! team, :id, :name, :project_ids, :member_ids
  end
end
