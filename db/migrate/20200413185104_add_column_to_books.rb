class AddColumnToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :book_cover_url, :string
  end
end
