class CreateHistories < ActiveRecord::Migration[5.1]
  def change
    create_table :histories do |t|
      t.text :coin
      t.integer :timestamp
      t.decimal :price

      t.timestamps
    end
  end
end
