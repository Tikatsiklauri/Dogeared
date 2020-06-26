class AddColumnToShelves < ActiveRecord::Migration[5.2]
  def change
    add_column :shelves, :book_ids, :string, array: true, default: []
  end
end
