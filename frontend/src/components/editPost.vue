<template>
  <div id="post">
      <div class="writeBox">
          <textarea class="PostValue" v-model="PostValue" placeholder="내용을 입력하세요"></textarea>
      </div>
      <div class="upBar">
          <textarea class="PostTitle" v-model="PostTitle" placeholder="제목"></textarea>
      </div>
      <div class="buttons">
          <button class="cancelPost" @click="$router.push('/home')">취소</button>
          <button class="uploadPost" @click="sendData">저장</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'], // 라우터에서 전달한 동적 매개변수를 받음
  data () {
    return {
      editedPost: {
        PostTitle: '',
        PostValue: ''
      }
    }
  },
  beforeMount () {
    // 게시물 정보를 가져와서 표시
    this.fetchPost()
  },
  methods: {
    async fetchPost () {
      try {
        const response = await axios.get(`/post/${this.id}`)
        this.editedPost = response.data
      } catch (error) {
        console.error('Error fetching post data', error)
      }
    },
    async updatePost () {
      try {
        await axios.put(`/post/${this.id}`, this.editedPost)
        this.$router.push('/home')
      } catch (error) {
        console.error('Error updating post', error)
      }
    }
  }
}
</script>

<style>
#post {
    display: inline-flex;
    align-items: center;
    background: #FFECF4;
}
.upBar {
    position: absolute;
    top: 70px;
    left: 265px;
    width: 1000px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: #F3DFE9;
}
.PostTitle {
    position: absolute;
    top: 20px;
    left: 10px;
    height: 30px;
    width: 900px;
    border: none;
    resize: none;
    background: none;
    color: #43293D;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 125% */
}
.PostTitle:focus {
    outline: none;
}
.writeBox {
    position: absolute;
    top: 70px;
    left: 265px;
    width: 1000px;
    height: 550px;
    flex-shrink: 0;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.25);
}
.PostValue {
    width: 950px;
    height: 400px;
    position: absolute;
    top: 80px;
    left: 15px;
    border: none;
    resize: none;
    background-color: white;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.PostValue:focus {
    outline: none;
}
.cancelPost {
    position: absolute;
    bottom: 110px;
    right: 330px;
    width: 80px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-radius: 30px;
    background: #E9D7E4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #50394B;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
}
.cancelPost:hover, .uploadPost:hover {
    cursor: pointer;
    background-color: #d5c4d0;
}
.uploadPost {
    position: absolute;
    bottom: 110px;
    right: 230px;
    width: 80px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-radius: 30px;
    background: #E9D7E4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #50394B;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
}
</style>
