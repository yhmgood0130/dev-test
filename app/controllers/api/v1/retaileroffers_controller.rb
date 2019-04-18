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

  def show2
    render json: @retailersByOffer
  end
  private

  def set_retailer_offer
    @retailerOffer = RetailerOffer.find(params[:id])
  end

  def set_offer_retailer
    @retailersByOffer = RetailerOffer.where(offer_id: params[:id])
  end
end