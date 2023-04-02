class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :release_date, :description
end
