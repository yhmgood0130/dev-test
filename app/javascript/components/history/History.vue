<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
      <div class="preview-content">
        <input type="search" v-model="searchWord" required />
        <div class="top-row offer-list">
          <div class="offer-box" v-for="(offer,idx) in offerHistories" :key="idx">
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
  name: 'History',
  created() {
    this.getOfferHistory();
  },
  components: { CollapsibleSection },
  computed: {
    offerHistories() {
      return this.$store.state.offers.offerHistories;
    },
  },
  methods: {
    ...mapActions('offers', ['getOfferHistory']),
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
