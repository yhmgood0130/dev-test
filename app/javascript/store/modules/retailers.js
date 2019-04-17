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
      axios.get(`/api/customers/${customerId}`)
        .then(result => commit('getCustomer', result.data[0]))
        .catch(console.error);
    },
    getRetailerOffers({ commit }, agentId) {
      axios.get(`/api/agents/${agentId}/customers`)
        .then(result => commit('getCustomerList', result.data))
        .catch(console.error);
    },
  },
  getters: {
  },
};
