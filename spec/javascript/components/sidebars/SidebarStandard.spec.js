import Vue from 'vue'
import SidebarStandard from '@/components/sidebars/SidebarStandard'

describe('SidebarStandard.vue', () => {
  it('displays default message', () => {
    const SideBar = Vue.extend(SidebarStandard)
    const vm = new SideBar().$mount()

    expect(vm.$el.textContent).toContain('HomePage')
  })
})