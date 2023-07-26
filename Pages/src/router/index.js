import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Post from '@/components/Post'
import login from '@/components/login'
import profile from '@/components/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/new-post',
      component: Post
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/profile',
      component: profile
    }
  ]
})
