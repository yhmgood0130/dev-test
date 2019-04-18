import axios from 'axios';

const removerAcentos = (string) => {
  const mapaAcentosHex = {
    a: /[\xE0-\xE6]/g,
    e: /[\xE8-\xEB]/g,
    i: /[\xEC-\xEF]/g,
    o: /[\xF2-\xF6]/g,
    u: /[\xF9-\xFC]/g,
    c: /\xE7/g
  }

  for (let letra in mapaAcentosHex) {
    var expressaoRegular = mapaAcentosHex[letra]
    string = string.replace(expressaoRegular, letra)
  }

  return string
}

export default {
  namespaced: true,
  state: {
    offer: null,
    offers: null,
    offerHistories: [],
    searchWord: null,
    filteredOffers: []
  },
  mutations: {
    getOfferById(state, id) {
      state.offer = state.offers.find(offer => offer.id === +id);
    },
    getOffers(state, offers) {
      state.offers = offers;
    },
    saveOfferHistory(state,offer) {
      state.offerHistories.push(offer);
    },
    filteredOffers(state, word) {
      if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredOffers = null
      } else {
        state.searchWord = word
        word = removerAcentos(word.trim().toLowerCase())
        state.filteredOffers = state.offers.filter((offer) => {
          return offer.name.toLowerCase().includes(word);
        })
      }
    },
    getOfferHistory(state) {
      state.offerHistories
    },
  },
  actions: {
    getOfferById({ commit },id) {
      commit('getOfferById', id);
    },
    getOffers({ commit }) {
      axios.get('/api/v1/offers')
        .then(result => commit('getOffers', result.data))
        .catch(console.error);
    },
    saveOfferHistory({ commit, state }, offer) {
      let isDuplicated = false;
      if (offer) {
        isDuplicated = state.offerHistories.some(o => o.id === offer.id);
      }
      if (!isDuplicated) {
        commit('saveOfferHistory',offer);
      }
    },
    getOfferHistory({ commit }) {
      commit('getOfferHistory');
    },
    filteredOffers ({ commit }, word) {
      commit('filteredOffers', word)
    }
  },
  getters: {
    allOffers: (state) => state.offers,

    getFilteredOffer: (state) => state.filteredOffers
  },
};
