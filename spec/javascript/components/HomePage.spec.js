import { shallowMount } from '@vue/test-utils'
import HomePage from '@/components/HomePage'

describe('HomePageComponent', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HomePage, {
      stubs: ['router-link']
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // it('should Offers renders stuff', () => {
  //   Vue.use(VueRouter)
  //   const router = new VueRouter({routes: [
  //       {path: '/offers', name: 'OfferList', component: OfferList},
  //   ]})
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     /* eslint-disable object-shorthand */
  //     router: router,
  //     render: h => h('router-view'),
  //   });
  //   router.push({name: 'OfferList'})
  //   Vue.nextTick(() => {
  //     console.log('html:', vm.$el)
  //     expect(vm.$el.querySelector('.offer-list')).to.toBeTruthy()
  //   })
  // })
})