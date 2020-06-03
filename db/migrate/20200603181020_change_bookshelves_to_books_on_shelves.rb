class ChangeBookshelvesToBooksOnShelves < ActiveRecord::Migration[5.2]
  def change
    rename_table :bookshelves, :books_on_shelves
  end
end
