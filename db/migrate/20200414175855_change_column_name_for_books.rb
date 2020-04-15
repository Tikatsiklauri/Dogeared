class ChangeColumnNameForBooks < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :book_cover_url, :image_url
  end
end
