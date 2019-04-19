require 'spec_helper'

RSpec.describe "API V1 Offers", type: 'request' do
  describe "GET /api/v1/offers" do

    it "get a list of offers" do
      create_list(:offer, 10)

      get '/api/v1/offers'

      expect(response).to be_success
      expect(json.length).to eq(10)
    end

    it "get Offer by Id " do
      offer1 = create(:offer)
      offer1.update_attribute(:id, 1)
      get '/api/v1/offers/1'

      expect(response).to be_success
      expect(json["name"]).to eq("MyString")
    end

    context "with invalid parameters" do
      it "fails when get OfferById has wrong Id" do
        offer1 = create(:offer)
        offer1.update_attribute(:id, 1)

        expect {get '/api/v1/offers/2'}.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end

# describe Api::V1::OffersController do
#   describe "GET 'index'" do
#     it "returns http success" do
#       get 'index'
#       response.should be_success
#     end
#   end

# end

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