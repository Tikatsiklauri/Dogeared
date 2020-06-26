class RemoveArrayfrom < ActiveRecord::Migration[5.2]
  def change
    remove_column :shelves, :book_ids
  end
end
