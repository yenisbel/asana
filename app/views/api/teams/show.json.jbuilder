
json.set! @team.id do
    json.extract! @team, :name, :description
end

@team.members.each do |member|
    json.members do
        json.set! member.id do
            json.extract! member, :id, :email
        end
    end
end

@team.projects.each do |project|
    json.projects do
        json.set! project.id do
            json.extract! project, :id, :name, :description, :team_id
        end
    end
    json.tasks do
        project.tasks.each do |task|
            json.set! task.id do
                json.extract! task, :id, :title, :description, :author_id, :project_id, :due_on, :completed
            end

        end
        
    end
end
