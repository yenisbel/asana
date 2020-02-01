@members.each do |member|
  json.set! member.id do
    json.extract! member, :id, :username
  end
end