@benches.each do |b|
    json.set! b.id do
        json.extract! b, :id, :description, :lat, :lng
    end 
end