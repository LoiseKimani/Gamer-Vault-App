class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password

  has_many :game_reviews
end
