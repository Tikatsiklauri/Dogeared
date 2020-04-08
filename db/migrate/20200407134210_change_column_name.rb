class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :first_name, :name
  end
end
