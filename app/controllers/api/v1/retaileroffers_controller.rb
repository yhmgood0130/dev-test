class Api::V1::RetaileroffersController < Api::V1::BaseController
  before_action :set_retailer_offer, only: [:show, :update, :destroy]
  def index
    @retailerOffers = RetailerOffer.all

    render json: @retailerOffers
  end

  # GET /retaileroffer/:id
  def show
    render json: @retailerOffer
  end
      
  private

  def set_retailer_offer
    @retailerOffer = RetailerOffer.find(params[:id])
  end
end