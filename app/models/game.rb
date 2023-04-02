class Game < ApplicationRecord
  has_many :game_reviews
  has_many :users, through: :game_reviews
    
  validates :title, presence: true
  validates :genre, presence: true
  validates :release_date, presence: true
  validates :description, presence: true
end
  