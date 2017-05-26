import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/Goods/goods.vue'
import Ratings from '../components/Ratings/ratings.vue'
import Seller from '../components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
