json.books do
    json.extract! @book, :id, :title, :author, :genre, :date, :overview
    json.shelves @book.shelves.where(user_id: current_user.id)
    begin
        json.image_url asset_path("book_images/#{@book.image_url}")
    rescue
        json.image_url @book.image_url
    end
end