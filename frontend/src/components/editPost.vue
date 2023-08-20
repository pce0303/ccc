<template>
  <div>
    <input type="text" class="editPostTitle" v-model="editPostTitle">
    <textarea class="editPostContent" v-model="editPostContent"></textarea>
    <button @click="savePost">저장</button>
    <button @click="gotoHome">취소</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      editPostTitle: '',
      editPostContent: '',
      postId: ''
    }
  },
  beforeMount () {
    // 현재 URL에서 게시물 ID를 추출하여 postId에 저장
    const postId = this.$route.params.id
    this.postId = postId
    this.fetchPostData(postId)
  },
  methods: {
    async fetchPostData (postId) {
      try {
        const response = await axios.get(`/post/${postId}`)
        this.editPostTitle = response.data.title
        this.editPostContent = response.data.content
      } catch (error) {
        console.error('Error fetching post data', error)
      }
    },
    async savePost () {
      const requestData = {
        title: this.editPostTitle,
        content: this.editPostContent
      }
      try {
        await axios.put(`/post/${this.postId}`, requestData)
        this.$router.push('/home')
      } catch (error) {
        console.error('Error saving post', error)
      }
    },
    gotoHome () {
      this.$router.push('/home')
    }
  }
}
</script>
