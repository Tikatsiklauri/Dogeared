class Shelving < ApplicationRecord
    validates :shelf, :book, presence: true
    validates_uniqueness_of :book_id, scope: :shelf_id

    belongs_to :shelf,
    foreign_key: :shelf_id,
    class_name: Shelf

    belongs_to :book,
    foreign_key: :book_id,
    class_name: Book

end
