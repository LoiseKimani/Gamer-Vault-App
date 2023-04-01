class GameReviewSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :rating, :comment

  belongs_to :user
  belongs_to :game
end
