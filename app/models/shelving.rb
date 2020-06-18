class Shelving < ApplicationRecord
    validates :shelf_id, :book_id, presence: true
    validates :book_id, uniqueness: {scope: :shelf_id}

    belongs_to :shelf,
    foreign_key: :shelf_id,
    class_name: :Shelf

    belongs_to :book,
    foreign_key: :book_id,
    class_name: :Book

end
