class Book < ApplicationRecord
    validates :title, :author, :genre, presence: true, uniqueness:true
    validates :date, :overview, presence: true
end
