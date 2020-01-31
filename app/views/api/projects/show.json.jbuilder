json.project do
    json.extract! @project, :id, :name, :description, :team_id
end

@project.tasks.each do |task|
    json.tasks do
        json.set! task.id do
            json.extract! task, :id, :title, :description, :completed, :author_id, :due_on
        end
    end
end