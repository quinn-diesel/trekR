class HikesController < ApplicationController

  before_action :check_if_logged_in, except: [:index, :show]

  def create
      @hike = Hike.new(hike_params);
  end

  def update
  end

  def index
       @startLocation = Hike.first.waypoints.first
  end

  def show
  end

  def edit
  end

  def new
  end

  def destroy
  end

  def hike_waypoints
      w = Waypoint.where(hike_id: params[:hike_id]);
      render json: w
  end

  def save_waypoints
      waypointArray = params[:waypoints]
    #   hike = Hike.create(hike_params)
      desc = params[:description]
      puts waypointArray

      testies = [];
      if params[:waypoints].present?
          waypointArray.each do |i|
              lat = waypointArray[i]['lat']
              long = waypointArray[i]['lng']
              testies.push({
                  lat: lat,
                  long: long
                  })

          end
      end




     render json: testies

  end

  private
  def hike_params
  params.require(:hike).permit(:name, :description)
  end
end
