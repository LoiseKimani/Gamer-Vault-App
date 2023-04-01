class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :"release-date", :description

  has_many :game_reviews
end
