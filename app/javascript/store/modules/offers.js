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
    filteredOffers: [],
    selected: 0
  },
  mutations: {
    getOfferById(state, id) {
      state.offer = state.offers.find(offer => offer.id === +id);
    },
    getOffers(state, offers) {
      state.offers = offers;
    },
    getOffersByRetailer(state, { offers, retailerId }) {
      state.searchWord = null;
      state.selected = retailerId;
      state.filteredOffers = offers;
    },
    saveOfferHistory(state,offer) {
      state.offerHistories.push(offer);
    },
    filteredOffers(state, { searchWord, offers }) {
      state.searchWord = searchWord;
      state.filteredOffers = offers;
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
    getOffersByRetailer({ commit, state, rootState }, retailerId) {      
      let retailerOffers = rootState.retailers.retailerOffers.filter(retailerOffer => retailerOffer.retailer_id === retailerId);
      let offers = state.offers.filter(offer => retailerOffers.some((retailerOffer) => 
        retailerOffer.offer_id === offer.id
      ));

      commit('getOffersByRetailer', { offers, retailerId })
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
    filteredOffers ({ commit,state }, word) {
      let searchWord = word;
      let offers = null;
      if (!(word) || word === '{}') {
        searchWord = null
        offers = null
      } else {
        word = removerAcentos(word.trim().toLowerCase());
        if(state.selected == 0) {
          offers = state.offers.filter((offer) => {
            return offer.name.toLowerCase().includes(word);
          });
        } else {
          offers = state.filteredOffers.filter((offer) => {
            return offer.name.toLowerCase().includes(word);
          });
        };
        searchWord = word;
      }

      commit('filteredOffers', { searchWord, offers });
    }
  },
  getters: {
    getFilteredOffer: (state) => state.filteredOffers
  },
};
