import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'
import '../common/stylus/index.styl'

Vue.use(VueRouter)

// const goods = { template: '<div>good</div>' }

const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/', redirect: '/goods'
  }
]

const router = new VueRouter({
  routes
  // linkActiveClass: 'active'
})

export default router
