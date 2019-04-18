<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
      <div class="preview-content">
        <input v-if="isOffer" type="search" v-model="searchWord" required />
        <div class="top-row offer-list">
          <div class="offer-box" v-for="(offer,idx) in offerList" :key="idx">
            <img @click="addToHistory(offer)" @  class="item-image" :src="offer.image_url">          
         </div>
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
    const { isOffer } = this.$data;
    if(isOffer) {
      this.getOffers();
    } else {
      this.getOfferHistory();
    }
  },
  data() {
    return {
      isOffer: this.$route.path === '/offers',
    }
  },
  components: { CollapsibleSection },
  computed: {
    offerList () {
      const { isOffer } = this.$data;
      console.log(isOffer);
      
        if (isOffer) {
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
        } else  {
          return this.$store.state.offers.offerHistories;
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
  watch: {
    isOffer() {
      return this.$route.path === '/offers';
    },
  },
  methods: {
    ...mapActions('offers', ['getOffers', 'getOfferHistory', 'saveOfferHistory']),
    addToHistory(offer) {
      this.saveOfferHistory(offer)
        .then(() => this.$router.push({ name: 'Offer', params: { id: offer.id }}));
    }
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
