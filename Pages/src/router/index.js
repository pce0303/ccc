import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newpost',
      component: Post
    }
    // {
    //   path: '/login',
    //   component: login
    // },
    // {
    //   path: '/profile',
    //   component: profile
    // }
  ]
})
