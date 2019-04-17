import Vue from 'vue';
import Vuex from 'vuex';

import offersModule from './modules/offers';
import retailersModule from './modules/retailers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    agents: offersModule,
    retailers: retailersModule,
  },
});
