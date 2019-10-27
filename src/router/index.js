import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import CareTeam from '../components/CareTeam.vue'
import Faq from '../components/Faq.vue'
import Setup from '../components/Setup.vue'
import Timeline from '../components/Timeline.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    title: 'home',
  },
  {
    path: '/careteam',
    name: 'CareTeam',
    component: CareTeam,
    title: 'CareTeam',
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq,
    title: 'home',
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup,
    title: 'home',
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline,
    title: 'home',
  }
]
export default new VueRouter({
  routes,
  mode: 'history',
  linkExactActiveClass: 'active',
})