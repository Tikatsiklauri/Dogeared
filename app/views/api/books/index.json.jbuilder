@books.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :author, :genre, :date, :overview
        begin
            json.image_url asset_path("book_images/#{book.image_url}")
        rescue
            json.image_url book.image_url
        end
    end
end