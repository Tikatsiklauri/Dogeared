class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :genre, null: false
      t.string :date, null: false
      t.text :overview, null: false

      t.timestamps
    end

    add_index :books, :title, unique: true
    add_index :books, :author, unique: true
    add_index :books, :genre, unique: true
  end
end
