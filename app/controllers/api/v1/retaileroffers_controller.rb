class Api::V1::RetaileroffersController < Api::V1::BaseController
  before_action :set_retailer_offer, only: [:show, :update, :destroy]
  def index
    @retailerOffers = RetailerOffer.all

    render json: @retailerOffers
  end
end