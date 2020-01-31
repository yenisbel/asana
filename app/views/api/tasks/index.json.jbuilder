@tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :title, :author_id, :project_id
    end
end