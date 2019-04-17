import axios from 'axios';

export default {
  namespaced: true,
  state: {
    offers: null,
    pageVistis: [],
  },
  mutations: {
    getOffers(state, offers) {
      state.offers = offers;
    },
    pagesVisited(state, offer) {
      // Will add validations in a bit
      state.pageVisits.push(offer);
    },
  },
  actions: {
    getoffers({ commit }) {
      axios.get('/api/offers')
        .then(result => commit('getoffers', result.data))
        .catch(console.error);
    },
    pagesVisited({ commit }, offer) {
      commit('pagesVisited', offer);
    },
  },
  getters: {
  },
};
