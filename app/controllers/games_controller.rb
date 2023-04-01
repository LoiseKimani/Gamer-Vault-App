class GamesController < ApplicationController
  def index
      games = Game.all
      render json: games
  end
  
  def show
      game = Game.find_by(id: params[:id])
      if game
        render json: game
      else
        render json: { error: "Game not found" }, status: :not_found
      end
  end
  
  def create
      game = Game.new(game_params)
      if game.save
        render json: game, status: :created
      else
        render json: { errors: game.errors.full_messages }, status: :unprocessable_entity
      end
  end
  
    private
  
  def game_params
      params.require(:game).permit(:title, :genre, :release_date, :description)
  end
end
  
