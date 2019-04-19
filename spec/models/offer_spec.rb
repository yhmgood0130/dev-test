require 'spec_helper'

RSpec.describe Offer, :type => :model do
  before(:all) do
    @offer1 = create(:offer)
  end
  it "is valid with valid attributes" do
    expect(@offer1).to be_valid
  end
  it "have created a relationship with RetailerOffer" do
    retailer = create(:retailer)

    @offer1.retailers << retailer

    RetailerOffer.first.offer.should == @offer1
    RetailerOffer.first.retailer.should == retailer
  end

  it "have retailerOffers" do
    retailer = create(:retailer)

    @offer1.retailers << retailer

    @offer1.retailers.should == [retailer]
  end
end