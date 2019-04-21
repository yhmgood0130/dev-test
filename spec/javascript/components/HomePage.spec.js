import { mount, shallowMount } from '@vue/test-utils'
import HomePage from '@/components/HomePage'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(HomePage, {
      stubs: ['router-link']
 })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})