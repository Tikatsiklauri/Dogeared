
user_shelves = []
all_books = {}
json.shelves do
    user.shelves.each do |shelf|
        json.set! shelf.id do
            user_shelves << shelf.id
            json.extract! shelf, :name, :id, :user_id
            books_ids = []
            shelf.books.each do |book|
                books_ids << book.id
                all_books[book.id] = shelf.id
            end
            json.books_ids books_ids
        end
    end
end

json.user do
    json.user_shelves user_shelves
    json.extract! user, :id, :email, :name
    json.books all_books
end