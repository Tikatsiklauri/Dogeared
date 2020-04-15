class Book < ApplicationRecord
    validates :title, :author, presence: true, uniqueness:true
    validates :date, :overview, :genre, presence: true
end
