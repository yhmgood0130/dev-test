require 'spec_helper'

RSpec.describe "API V1 Retailers", type: 'request' do
  describe "GET /api/v1/retailers" do

    it "get a list of retailers" do
      create_list(:retailer, 10)

      get '/api/v1/retailers'

      expect(response).to be_success
      expect(json.length).to eq(10)
    end

    it "get Retailer by Id " do
      retailer1 = create(:retailer)
      retailer1.update_attribute(:id, 345)
      get '/api/v1/retailers/345'

      expect(response).to be_success
      expect(json["name"]).to eq("MyString")
    end

    context "with invalid parameters" do
      it "fails when get RetailerById has wrong Id" do
        retailer1 = create(:retailer)
        retailer1.update_attribute(:id, 720)
        
        expect {get '/api/v1/retailers/721'}.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end