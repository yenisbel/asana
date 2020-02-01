@columns.each do |column|
  json.set! column.id do
    json.extract! column, :id, :name, :task_ids, :project_id
  end
end
