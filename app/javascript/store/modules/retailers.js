import axios from 'axios';

export default {
  namespaced: true,
  state: {
    retailerOffers: [],
    retailers: [],
  },
  mutations: {
    getRetailers(state, retailers) {
      state.retailers = retailers;
    },
    getRetailerOffers(state, retailerOffers) {
      state.retailerOffers = retailerOffers;
    },
  },
  actions: {
    getRetailers({ commit }, customerId) {
      axios.get(`/api/v1/retailers`)
        .then(result => commit('getRetailers', result.data))
        .catch(console.error);
    },
    getRetailerOffers({ commit }, agentId) {
      axios.get('/api/v1/retaileroffers')
        .then(result => commit('getRetailerOffers', result.data))
        .catch(console.error);
    },
  },
  getters: {
  },
};
