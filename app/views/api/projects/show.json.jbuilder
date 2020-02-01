json.project do
  json.extract! @project, :id, :name, :description, :color, :column_ids, :team_id
end
@project.columns.each do |column|
  json.columns do
    json.set! column.id do
      json.extract! column, :id, :name, :project_id, :task_ids
    end
  end
  json.tasks do
    column.tasks.each do |task|
      json.set! task.id do
        json.extract! task, :id, :title, :description, :completed, :author_id, :column_id, :due_date
      end
    end
  end
end
