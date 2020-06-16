class Shelf < ApplicationRecord
    validates :user_id, :name, presence: true

    belongs_to :user
 
    has_many :shelvings,
    foreign_key: :shelf_id,
    class_name: Shelving,
    dependent: :destroy

    has_many :books,
    through: :shelvings,
    source: :book

    def unique_shelving(book_id)
        if default_shelf?
            shelved_book = self.user.default_shelvings.select {|shelf_book| shelf_book.id == book_id}
            shelved_book.destroy if shelved_book
        end
    end

    def is_owner?
        self.user == current_user
    end

    private
    def default_shelf?
        self.user.default_shelves.include?(self)
    end
end
