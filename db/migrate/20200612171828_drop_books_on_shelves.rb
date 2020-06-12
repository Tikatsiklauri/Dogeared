class DropBooksOnShelves < ActiveRecord::Migration[5.2]
  def change
    drop_table :books_on_shelves
  end
end
