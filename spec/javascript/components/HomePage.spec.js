import { mount } from '@vue/test-utils'
import HomePage from '@/components/HomePage'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})