require 'spec_helper'

RSpec.describe Retailer, :type => :model do
  before(:all) do
    @retailer1 = create(:retailer)
  end
  it "is valid with valid attributes" do
    expect(@retailer1).to be_valid
  end
  it "have created a relationship with RetailerOffer" do
    offer = create(:offer)

    @retailer1.offers << offer

    RetailerOffer.first.retailer.should == @retailer1
    RetailerOffer.first.offer.should == offer
  end

  it "have retailerOffers" do
    offer = create(:offer)

    @retailer1.offers << offer

    @retailer1.offers.should == [offer]
  end
end