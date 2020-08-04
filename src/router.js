import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('./views/home.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/form/index.vue')
    }
  ]
})
