import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuex from 'vuex'
import Offer from '@/components/offers/OfferList'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Offer.vue', () => {
  let state
  let actions
  let store

  beforeEach(() => {
    actions = {
      getRetailersByOffer: jest.fn(),
      getOfferById: jest.fn()
    }
    state = {
        offers: {
          offer:{},
        },
        retailers:{
          retailers: {},
          retailersByOffer: {}
        },
    }
    store = new Vuex.Store({
      state,
      actions
    })
  })

  it('has a created hook', () => {
    expect(typeof Offer.created).toBe('function')
  })

  // it('dispatches "filteredOffers" when the input is being added to search box"', () => {
  //   const wrapper = shallowMount(OfferList, { store, localVue })
  //   const input = wrapper.find('input')

  //   input.element.value = "input"
  //   input.trigger('input')
  //   expect(actions.filteredOffers.mock.calls).toHaveLength(1)
  // })

  // it('dispatches "getOffersByRetailer" when the select option is changed"', () => {
  //   const wrapper = shallowMount(OfferList, { store, localVue })
  //   wrapper.findAll('option').at(1).trigger('change')
  //   expect(actions.getOffersByRetailer).toHaveBeenCalled();
  // })
})