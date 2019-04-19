<template>
  <div
    v-if="offer"
    class="offer-box"
  >
    <img
      :src="offer.image_url"
      class
    >
    <div class="item-description">
      <h4>{{offer.name}}</h4>
      <div>{{offer.descridivtion}}</div>
      <div>{{offer.terms}}</div>
      <div>Available at</div>
      <p
        v-for="(retailer, index) in retailers"
        :key="index"
        class="retailer-name"
      >{{retailer.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  created() {
    this.$store.dispatch(
      "retailers/getRetailersByOffer",
      this.$route.params.id
    );
    this.$store.dispatch("offers/getOfferById", this.$route.params.id);
  },
  computed: {
    offer() {
      return this.$store.state.offers.offer;
    },
    retailers() {
      let retailers = this.$store.state.retailers.retailers;
      let retailerOffers = this.$store.state.retailers.retailersByOffer;
      let result = retailers.filter(retailer =>
        retailerOffers.some(
          retailerOffer => retailerOffer.retailer_id === retailer.id
        )
      );

      return result;
    }
  }
};
</script>

<style lange="scss" scoped>
.detail-box {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 10px;
  flex: 1 0 calc(33% - 8px); /* explanation below */
  margin: 5px;
  height: 30em;
  box-shadow: 0 0 5px grey;
  border-radius: 2%;
}
img {
  height: calc(40% - 4px);
  bottom: 0;
  padding-bottom: 10px;
}
.retailer-name {
  display: inline;
}
</style>
