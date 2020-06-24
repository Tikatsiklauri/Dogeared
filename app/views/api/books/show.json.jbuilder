json.books do
    json.set! @book.id do
        json.extract! @book, :id, :title, :author, :genre, :date, :overview
        begin
            json.image_url asset_path("book_images/#{@book.image_url}")
        rescue
            json.image_url @book.image_url
        end
    end
end
json.reviews do
    @book.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :user_id, :book_id, :body, :rating, :created_at
            json.name review.user.name
        end
    end
end
    