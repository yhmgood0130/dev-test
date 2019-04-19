require 'spec_helper'

describe Api::V1::OffersController do
  describe "GET 'index'" do
    it "returns http success" do
      get 'index'
      response.should be_success
    end
  end

end

#   before_action :set_offer, only: [:show]
#   # GET /offers
#   def index
#     @offers = Offer.all

#     render json: @offers
#   end

#   # GET /offers/:id
#   def show
#     render json: @offer
#   end

      
#   private

#   def set_offer
#       @offer = Offer.find(params[:id])
#   end
# end