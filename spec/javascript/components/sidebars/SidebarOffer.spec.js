import { shallowMount } from '@vue/test-utils'
import SidebarOffer from '@/components/sidebars/SidebarOffer'

describe('StandardOffer.vue', () => {
  const $route = {
    path: "/offers"
  };
  const wrapper = shallowMount(SidebarOffer, {
    mocks: { $route },
  });  
  it('has a created hook', () => {
    expect(wrapper.find('.sidebar').text()).to.equal("Offer");
  })
})