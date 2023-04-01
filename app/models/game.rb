class Game < ApplicationRecord
  has_many :game_reviews
  has_many :users, through: :game_reviews
  validates :title, presence: true, uniqueness: true
  validates :genre, presence: true
  validates :release_date, presence: true
end
  
