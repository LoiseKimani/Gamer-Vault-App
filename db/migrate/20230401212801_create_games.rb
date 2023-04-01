class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :release_date
      t.string :description

      t.timestamps
    end
  end
end
