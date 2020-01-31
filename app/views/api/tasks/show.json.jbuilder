json.task do
    json.extract! @task, :id, :title, :description, :author_id, :completed, :project_id, :due_on
end