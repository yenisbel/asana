
json.set! @team.id do
    json.extract! @team, :name, :description
end
