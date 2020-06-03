class ChangeColumnNameInBooksOnShelvesTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :books_on_shelves, :user_id, :shelf_id
  end
end
