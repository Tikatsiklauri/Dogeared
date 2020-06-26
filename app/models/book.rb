class Book < ApplicationRecord
    validates :title, :author, presence: true, uniqueness:true
    validates :date, :overview, :genre, presence: true

    has_many :shelvings,
    foreign_key: :book_id,
    class_name: :Shelving
  

    has_many :shelves,
    through: :shelvings,
    source: :shelf

    has_many :reviews
end
