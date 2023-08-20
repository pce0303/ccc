<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import login from './components/login.vue'
import Post from './components/Post.vue'
import profile from './components/profile.vue'
import register from './components/register.vue'
import editPost from './components/editPost.vue'

export default {
  name: 'App',
  components: {
    Home,
    login,
    Post,
    profile,
    register,
    editPost
  }
}
</script>

<style>
</style>
