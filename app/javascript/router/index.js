import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import Offer from '../components/offers/Offer.vue';
import OfferList from '../components/offers/OfferList.vue';
import History from '../components/history/History.vue';
import SidebarOffer from '../components/sidebars/SidebarOffer';
import SidebarStandard from '../components/sidebars/SidebarStandard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/offers',
    name: 'OfferList',
    components: {
      default: OfferList,
      sidebar: SidebarOffer,
    },
  }, {
    path: '/offers/:id',
    name: 'Offer',
    component: Offer,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  },
  {
    path: '/history',
    name: 'History',
    components: {
      default: OfferList,
      sidebar: SidebarOffer
    },
  }],
});
