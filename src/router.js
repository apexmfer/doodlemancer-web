import Vue from 'vue'
import Router from 'vue-router'
//import Router from './hash-router.vue'

import Home from './views/Home.vue'
import Filters from './views/Filters.vue'

import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
//  mode: 'history',
//  base: process.env.PUBLIC_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
 

    {
      path: '/filters',
      name: 'filters',
      component: Filters
    },
 
    {
      path: '/*',
      component: NotFound
    },
  ]
})
