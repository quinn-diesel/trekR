class HikesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def create
      @hike = Hike.new(hike_params);
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
  def hike_params
  params.require(:hike).permit(:name, :description)
  end
end
