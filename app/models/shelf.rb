class Shelf < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    has_many :books_on_shelves,
    class_name: :Book_on_shelf,
    foreign_key: :shelf_id
end
