@teams.each do |b|
    json.set! b.id do
        json.extract! b, :id, :name, :description
    end 
end