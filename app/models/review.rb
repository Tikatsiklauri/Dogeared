class Review < ApplicationRecord
    validates :book_id, :user_id, :body, :rating, presence: true

    belongs_to :book

    belongs_to :user
end
