class Shelving < ApplicationRecord
    belongs_to :shelf,
    foreign_key: :shelf_id,
    class_name: Shelf

    belongs_to :book,
    foreign_key: :book_id,
    class_name: Book

    has_one :user
    through :shelf
    source: :user
end
