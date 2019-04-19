require 'spec_helper'

describe RetailerOffer do
  describe "Associations" do
    it "belongs_to offer" do
      assc = described_class.reflect_on_association(:offer)
      expect(assc.macro).to eq :belongs_to
    end
    it "belongs_to retailer" do
      assc = described_class.reflect_on_association(:retailer)
      expect(assc.macro).to eq :belongs_to
    end
  end
end