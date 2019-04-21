import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/app"
import VueRouter from "vue-router"
import HomePage from "@/components/HomePage"
import routes from "@/router"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
    // mount instead of shallowMount. 
    // If we use shallowMount, <router-link> will be stubbed out, 
    // regardless of the current route, a useless stub component will be rendered.
  it("renders Home component via routing", () => {
    const router = routes;
    const wrapper = mount(App, { localVue, router })

    console.log(wrapper);
    

    router.push("/")

    expect(wrapper.find(HomePage).exists()).toBe(true)
  })

//   it("renders Offer component via routing", () => {
//     const router = routes;
//     const wrapper = mount(App, { localVue, router })

//     router.push("/offers")

//     expect(wrapper.find(OfferList).exists()).toBe(true)
//   })
})