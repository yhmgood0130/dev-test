import axios from 'axios';

export default {
  namespaced: true,
  state: {
    retailers: [],
    retailerOffers: [],
    retailersByOffer: [],
  },
  mutations: {
    getRetailers(state, retailers) {
      state.retailers = retailers;
    },
    getRetailerOffers(state, retailerOffers) {
      state.retailerOffers = retailerOffers;
    },
    getRetailersByOffer(state, retailers) {
      state.retailersByOffer = retailers;
    }
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
    getRetailersByOffer({ commit,state }, offerId) {
      console.log(offerId);
      
      let result = state.retailerOffers.filter(retailerOffer => retailerOffer.offer_id === offerId);
      console.log(result);
      commit('getRetailersByOffer', result)
    }
  },
  getters: {
  },
};
