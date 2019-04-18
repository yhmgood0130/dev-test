class Api::V1::RetailersController < Api::V1::BaseController
  before_action :set_retailer, only: [:show]
  # GET /retailers
  def index
    @retailers = Retailer.all

    render json: @retailers
  end

  # GET /retailers/:id
  def show
    render json: @retailer
  end

      
  private

  def set_retailer
      @retailer = Retailer.find(params[:id])
  end
end