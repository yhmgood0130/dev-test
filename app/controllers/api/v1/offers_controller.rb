class Api::V1::OffersController < Api::V1::BaseController
  before_action :set_offer, only: [:show]
  # GET /offers
  def index
    @offers = Offer.all

    render json: @offers
  end

  # GET /offers/:id
  def show
    render json: @offer
  end

      
  private

  def set_offer
      @offer = Offer.find(params[:id])
  end
end