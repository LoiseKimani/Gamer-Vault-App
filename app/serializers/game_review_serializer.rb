class GameReviewSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :rating, :comment
end
