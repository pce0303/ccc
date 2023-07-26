import { createWebHistory, createRouter } from 'vue-router'

import Home from './../components/Home'
import login from './../components/login'
import Post from './../components/Post'
import profile from './../components/profile'

const routes = [
  {path: '/', component: login},
  {path: '/home', component: Home},
  {path: '/new-post', component: Post},
  {path: '/profile', component: profile}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
