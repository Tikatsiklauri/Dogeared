json.extract! shelf, :id, :name, :user_id

books_ids = []
shelf.books.each do |book|
    books_ids << book.id
end
json.books_ids books_ids

            