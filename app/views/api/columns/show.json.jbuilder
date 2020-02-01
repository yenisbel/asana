json.column do
  json.extract! @column, :id, :name, :project_id, :task_ids
end

json.tasks do
  @column.tasks.each do |task|
    json.set! task.id do
      json.extract! task, :id, :title, :description, :completed, :author_id, :column_id, :due_date
    end
  end
end

# remember to fetch the due date and the assignee_id later!
