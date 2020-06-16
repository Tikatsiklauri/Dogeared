class Book < ApplicationRecord
    validates :title, :author, presence: true, uniqueness:true
    validates :date, :overview, :genre, presence: true

    has_many :shelvings,
    foreign_key: :book_id,
    class_name: :Shelving,
    dependent: :destroy

    has_many :shelves,
    through: :shelvings 
end
