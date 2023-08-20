import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'
import login from '@/components/login'
import profile from '@/components/profile'
import Home from '@/components/Home'
import post from '@/components/post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: register
    },

    {
      path: '/login',
      component: login
    },

    {
      path: '/Home',
      component: Home
    },

    {
      path: '/profile',
      component: profile
    },

    {
      path: '/post',
      component: post
    }

  ]
})
