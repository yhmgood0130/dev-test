require 'spec_helper'

RSpec.describe "API V1 Retailers", type: 'request' do
  describe "GET /api/v1/retaileroffers" do
    before(:each) do
      @offer1 = create(:offer)
      @retailer1 = create(:retailer)
      @retailer1.offers << @offer1
    end

    it "get a list of retaileroffers" do
      get '/api/v1/retaileroffers'

      expect(response).to be_success
      expect(json.length).to eq(1)
    end
  end
end