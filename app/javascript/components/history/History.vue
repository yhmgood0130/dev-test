<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
      <div class="preview-content">
        <div class="top-row">
          <h2>Top Row</h2>
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
// For Hardcoded Local API call - import availableParts from '../data/part';
import { mapActions } from 'vuex';
import CollapsibleSection from '../shared/CollapsibleSection.vue';

export default {
  name: 'History',
  created() {
  },
  beforeRouteLeave(to, from, next) {
    if (this.addedToCart) {
      next(true);
    } else {
      // Demo-purpose
      /* eslint no-alert: 0 */
      /* eslint no-restricted-globals: 0 */
      const response = confirm('You have not added your robot to your cart, are you sure you want to leave?');
      next(response);
    }
  },
  components: { CollapsibleSection },
  data() {
    return {
      addedToCart: false,
    };
  },
  computed: {
  },
  methods: {
    ...mapActions('offers', ['getOffer']),
  },
};
</script>

<style lange="scss" scoped>
</style>
