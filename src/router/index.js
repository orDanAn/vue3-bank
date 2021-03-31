import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    meta: {
      layout: 'main',
      auth: true
    },
    component: () => import('../views/Help.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    meta: {
      layout: 'auth'
    },
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  const requereAuth = to.meta.auth

  if(requereAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requereAuth && !store.getters['auth/isAuthenticated']) {
    next('/auth?message=auth')
  } else {
    next()
  }


})

export default router
