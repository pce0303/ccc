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

export default {
  name: 'App',
  components: {
    Home,
    login,
    Post,
    profile
  }
}
</script>

<style>
</style>
