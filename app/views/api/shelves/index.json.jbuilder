@shelves.each do |shelf|
    json.set! shelf.id do
        json.extract! shelf, :id, :user_id, :name
        json.book shelf.books.each do |book|
            json.extract! book, :id, :title, :author, :genre, :date, :overview, :image_url
        end
    end
end