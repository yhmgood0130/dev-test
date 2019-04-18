<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
      <div class="preview-content">
        <input type="search" v-model="searchWord" required />
        <div class="top-row offer-list">
          <div class="offer-box" v-for="(offer,idx) in filteredOffers" :key="idx">
          <router-link :to="{
            name: 'Offer',
            params: {
              id: offer.id
            }}">
            <img class="item-image" :src="offer.image_url">
          </router-link>
        </div>
        </div>
        <div class="middle-row">
          <h2>Center Row</h2>
        </div>
        <div class="bottom-row">
          <h2>Bottom Row</h2>
        </div>
      </div>
      </CollapsibleSection>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'OfferList',
  created() {
    this.getOffers();
  },
  components: { CollapsibleSection },
  data() {
    return {
      addedToCart: false,
    };
  },
  computed: {
    availableOffers() {
      return this.$store.state.offers.offers;
    },
    filteredOffers () {
      try {
        let a = this.$store.getters['offers/getFilteredOffer'];
        if (a) {
          a = (this.$store.getters['offers/getFilteredOffer'].length > 0 ? 
            this.$store.getters['offers/getFilteredOffer'] :
            this.$store.state.offers.offers)
        } else {
          a = this.$store.state.offers.offers;
        }
        return a
      } catch (e) {
        console.log(e)
      }
    },
    searchWord: {
      get () {
        return this.$store.state.offers.searchWord
      },
      set (value) {
        this.$store.dispatch('offers/filteredOffers', value)
      }
    }
  },
  methods: {
    ...mapActions('offers', ['getOffers']),
  },
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
  font-family: Verdana,Geneva,sans-serif; 
  font-size: 12px;
  font-weight: 900;
  color: #424040;
}
</style>
