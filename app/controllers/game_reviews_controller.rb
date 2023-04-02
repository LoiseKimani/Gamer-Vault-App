class GameReviewsController < ApplicationController
    before_action :set_game_review, only: [:show, :destroy]
    before_action :require_login, only: [:create, :destroy]
  
    def index
      game_reviews = GameReview.all
      render json: game_reviews
    end
  
    def show
      render json: game_review
    end
  
    def create
      game_review = GameReview.new(game_review_params)
      game_review.user_id = session[:user_id]
      
      if game_review.save
        render json: game_review, status: :created
      else
        render json: { errors: game_review.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def destroy
      if @game_review.user_id == session[:user_id]
        @game_review.destroy
        head :no_content
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    private
  
    def set_game_review
      @game_review = GameReview.find_by(id: params[:id])
      if !@game_review
        render json: { error: "Game review not found" }, status: :not_found
      end
    end
  
    def game_review_params
      params.require(:game_review).permit(:name, :rating, :comment, :game_id)
    end
  
    def require_login
      unless session[:user_id]
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  end
  