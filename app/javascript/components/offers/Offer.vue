<template>
    <div class="offer-box">
      <img :src="offer.image_url" class="">
      <div class="item-description">
        <h4>{{offer.name}}</h4>
        <div>{{offer.descridivtion}}</div>
        <div>{{offer.terms}}</div>
      </div>
    </div>
</template>

<script>
import getOffersMixin from './get-offers-mixin';

export default {
  name: 'Offer',
  mixins: [getOffersMixin],
  props: {
    id: { 
      type: [Number,String],
      validator(value) {
       return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    offer() {
      const { id } = this;
      return this.offers.offers.find(offer => offer.id === +id);
    }
  },
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
</style>
