<template>
  <div class="content">
    <div class="preview">
      <div class="preview-content">
        <input
          v-if="isOffer"
          v-model="searchWord"
          type="search"
          required
        >
        <select
          v-model="selectedRetailer"
        >
          <option
            disabled
            value
          >Please select one</option>
          <option value="0">All</option>
          <option
            v-for="(retailer,idx) in retailers"
            :key="idx"
            :value="retailer.id"
          >{{retailer.name}}</option>
        </select>
        <div class="top-row offer-list">
          <div
            v-for="(offer,idx) in offerList"
            :key="idx"
            class="offer-box"
          >
            <img
              class="item-image"
              :src="offer.image_url"
              @click="addToHistory(offer)"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CollapsibleSection from "../shared/CollapsibleSection.vue";

export default {
  name: "OfferList",
  components: { CollapsibleSection },
  created() {
    const { isOffer } = this.$data;
    if (isOffer) {
      this.getOffers();
    } else {
      this.getOfferHistory();
    }
    this.getRetailers();
    this.getRetailerOffers();
  },
  data() {
    return {
      //Used window.location.pathname instead of this.$route.path due to test issue
      isOffer: window.location.pathname === "/offers"
    };
  },
  computed: {
    offerList: {
      get() {        
        const { isOffer } = this.$data;
        if (isOffer) {
          let filteredOfferList = this.$store.getters[
            "offers/getFilteredOffer"
          ];

          if (filteredOfferList) {
            filteredOfferList =
              this.$store.getters["offers/getFilteredOffer"].length == 0 &&
              this.selectedRetailer == 0
                ? this.$store.state.offers.offers
                : this.$store.getters["offers/getFilteredOffer"];
          } else {
            filteredOfferList = this.$store.state.offers.offers;
          }
          return filteredOfferList;
        } else {
          return this.$store.state.offers.offerHistories;
        }
      },
      set(value) {}
    },
    retailers() {
      return this.$store.state.retailers.retailers;
    },
    selectedRetailer: {
      get() {
        return this.$store.state.offers.selected;
      },
      set(value) {
        this.$store.dispatch("offers/getOffersByRetailer", value);
      }
    },
    searchWord: {
      get() {
        return this.$store.state.offers.searchWord;
      },
      set(value) {
        this.$store.dispatch("offers/filteredOffers", value);
      }
    }
  },
  watch: {
    isOffer() {
      return this.$route.path === "/offers";
    }
  },
  methods: {
    ...mapActions("offers", [
      "getOffers",
      "getOfferHistory",
      "saveOfferHistory"
    ]),
    ...mapActions("retailers", ["getRetailers", "getRetailerOffers"]),
    addToHistory(offer) {
      this.saveOfferHistory(offer).then(() =>
        this.$router.push({ name: "Offer", params: { id: offer.id } })
      );
    }
  }
};
</script>

<style lange="scss">
.offer-list {
  display: flex;
  flex-wrap: wrap;
}

.item-image {
  object-fit: contain;
}

.offer-box {
  text-align: center;
  padding: 10px;
  flex: 1 0 calc(33% - 8px); /* explanation below */
  margin: 5px;
  height: 30em;
  box-shadow: 0 0 5px grey;
  border-radius: 2%;
  cursor: pointer;
}
img {
  height: calc(40% - 4px);
  padding: 20px 0;
}

.item-description {
  vertical-align: bottom;
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  font-weight: 900;
  color: #424040;
}
</style>
