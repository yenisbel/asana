@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :column_id
  end
end
