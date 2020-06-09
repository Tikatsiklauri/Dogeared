@shelves.each do |shelf|
    json.set! shelf.id do
        json.extract! shelf, :id, :book_id, :shelf_id
    end
end