class UsersController < ApplicationController

### Check the user login
before_action :get_user, only: [ :show, :edit, :update ]
# before_action :check_if_admin,  only: [ :index ]

before_action :check_if_logged_in, only: [ :hike_create, :update_hikes ]

  def get_user
     @user = User.find params["id"]
  end

#### Standard CRUD #####

  def create
      @user = User.new(user_params)
  end

  def update
  end

  def index
  end

  def show
  end

  def edit
  end

  def new
  end

  def destroy
  end

  private
  def user_params
      params.require(:user).permit(:firstname, :surname, :email, :password, :password_confirmation)
  end
end
