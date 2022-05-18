import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Outdoor from '../views/Outdoor.vue'
import OutdoorDetail from '../views/OutdoorDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/outdoor',
    name: 'Outdoor',
    component: Outdoor
  },
  {
    path: '/outdoor/:id',
    name: 'OutdoorDetail',
    component: OutdoorDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
