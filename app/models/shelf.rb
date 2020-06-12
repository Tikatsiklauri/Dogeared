class Shelf < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    foreign_key: :user_id
    class_name: :User,

    has_many :books,
    foreign_key: :shelf_id
    class_name: :Book,
end
