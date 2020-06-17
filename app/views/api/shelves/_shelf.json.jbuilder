json.extract! shelf: :id, :name, :user_id

json.books do
    json.array! shelf.books, partial: "api/books/book", as: :book
end