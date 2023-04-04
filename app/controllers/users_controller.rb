class UsersController < ApplicationController
  before_action :require_login, only: [:destroy]
  
  def index
    users = User.all
    render json: users
  end
    
  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end
    
  def create
    user = User.new(user_params)
      
    if user
      user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
    
  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      session[:user_id] = nil
      head :no_content
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end
    
    private
    
  def user_params
      params.permit(:id, :username, :email, :password)
  end
  
  def require_login
    unless session[:user_id]
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
end
  