class RemoveIndexFromShelves < ActiveRecord::Migration[5.2]
  def change
    remove_index :shelves, :user_id
  end
end
