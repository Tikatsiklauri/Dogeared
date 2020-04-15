class RemoveGenreUniqueness < ActiveRecord::Migration[5.2]
  def change
    remove_index :books, :genre 
  end
end
