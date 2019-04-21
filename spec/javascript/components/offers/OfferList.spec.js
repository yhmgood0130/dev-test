import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import OfferList from '@/components/offers/OfferList'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('OfferList.vue', () => {
  let state
  let actions
  let store

  beforeEach(() => {
    actions = {
        getOffers: jest.fn(),
        getOfferHistory: jest.fn(),
        saveOfferHistory: jest.fn(),
        filteredOffers: jest.fn(),
        getOffersByRetailer: jest.fn(),
        getRetailers: jest.fn(),
        getRetailerOffers: jest.fn(),
    }
    state = {
        offers: {
            offers:{},
            offerHistories: {},
            selected: 0
        },
        retailers:{
          retailers: {}
        },
    }
    store = new Vuex.Store({
      state,
      actions
    })
  })
  it('has a created hook', () => {
    expect(typeof OfferList.created).toBe('function')
  })

  it('dispatches "filteredOffers" when the input is being added to search box"', () => {
    const wrapper = shallowMount(OfferList, { store, localVue })
    const input = wrapper.find('input')

    input.element.value = "input"
    input.trigger('input')
    expect(actions['offers/filteredOffers']).toHaveBeenCalled()
  })

  it('dispatches "getOffersByRetailer" when the select option is changed"', () => {
    const wrapper = shallowMount(OfferList, { store, localVue })
    wrapper.findAll('option').at(1).trigger('change')
    expect(actions.getOffersByRetailer).toHaveBeenCalled();
  })
})