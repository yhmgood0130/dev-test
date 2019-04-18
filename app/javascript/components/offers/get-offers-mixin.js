export default {
  created() {
    this.$store.dispatch('offers/getOffers');
  },
  computed: {
    offers() {
      return this.$store.state.offers.offers || { };
    },
  },
};
