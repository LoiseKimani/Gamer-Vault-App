class CreateGameReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :game_reviews do |t|
      t.string :image
      t.string :name
      t.integer :rating
      t.string :comment

      t.timestamps
    end
  end
end
