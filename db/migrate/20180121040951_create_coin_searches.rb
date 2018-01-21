class CreateCoinSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :coin_searches do |t|
      t.text :name
      t.text :identifier

      t.timestamps
    end
  end
end
