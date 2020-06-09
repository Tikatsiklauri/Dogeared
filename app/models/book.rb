class Book < ApplicationRecord
    validates :title, :author, presence: true, uniqueness:true
    validates :date, :overview, :genre, presence: true

    has_many :books_on_shelves,
    class_name: :Book_On_Shelf,
    foreign_key: :book_id

    has_many :shelves,
    through: :books_on_shelves,
    source: :shelf
end
