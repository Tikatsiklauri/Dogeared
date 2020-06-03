class Book_On_Shelf < ApplicationRecord
    validates :book_id, :shelf_id, presence: true

    belongs_to :book
    belongs_to :shelf

    has_one :owner,
    through: :shelf,
    source: :user
end