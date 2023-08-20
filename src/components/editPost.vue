<template>
  <div class="edit-post-container">
    <h2 text-align="center" class="editSlogan">Edit Your Post</h2>
    <textarea type="text" class="editPostTitle" v-model="editPostTitle"></textarea>
    <textarea class="editPostContent" v-model="editPostContent"></textarea>
    <div class="button-container">
      <button class="save-button" @click="savePost">저장</button>
      <button class="cancel-button" @click="gotoHome">취소</button>
    </div>
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

<style>
.edit-post-container {
  position: relative;
  top: 70px;
  left: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  width: 70%;
  border-radius: 20px;
}
.editSlogan {
  background-color: white;
}
.editPostTitle, .editPostContent {
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: black;
  resize: none;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
}
.editPostContent {
  margin-top: 100px;
  width: 80%;
  height: 200px;
}
.editPostTitle {
  position: absolute;
  top: 20%;
  width: 77%;
}
.editPostTitle,
.editPostContent:focus {
  outline: none;
}
.button-container {
  display: flex;
  gap: 10px;
  background-color: white;
}

.save-button, .cancel-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button {
  background-color: #ffcbfc;
  color: rgb(56, 56, 56);
}

.cancel-button {
  background-color: #ffcbfc;
  color: rgb(56, 56, 56);
}
</style>
