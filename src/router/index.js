import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/accountcenter',
    name: 'accountcenter',
    component: () => import('../views/AccountCenter.vue')
  },
  {
    path: '/msgcenter',
    name: 'msgcenter',
    component: () => import('../views/MsgCenter.vue')
  },
  {
    path: '/procapability',
    name: 'procapability',
    component: () => import('../views/ProCapability.vue')
  },
  {
    path: '/productintro',
    name: 'productintro',
    component: () => import('../views/ProductIntro.vue')
  },
  {
    path: '/productdetail',
    name: 'productdetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/devaccess',
    name: 'devaccess',
    component: () => import('../views/devAccess.vue')
  },
  {
    path: '/devaccess/videotutorialall',
    name: 'devaccess',
    component: () => import('../views/VideoTutorialAll.vue')
  },
  {
    path: '/devaccess/accessguidedetail',
    name: 'devaccess',
    component: () => import('../views/AccessGuideDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
