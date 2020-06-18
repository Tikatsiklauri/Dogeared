class Shelf < ApplicationRecord
    validates :user_id, :name, presence: true

    belongs_to :user
 
    has_many :shelvings,
    foreign_key: :shelf_id,
    class_name: :Shelving

    has_many :books,
    through: :shelvings,
    source: :book

end
