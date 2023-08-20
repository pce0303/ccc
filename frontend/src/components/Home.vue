<template>
    <div id="home">
    <header>
        <button class="main" @click="$router.push('/home')">COCACO</button>
        <button class="username" @click="$router.push('/profile')">{{ username }}</button>
        <button class="write" @click="$router.push('/post')">글 작성</button>
    </header>
    <div>
        <div v-for="post in posts" :key="post.id" class="postItem">
            <h2 class="post_title">{{ post.title }}</h2>
            <p class="post_content">{{ post.content }}</p>
            <p class="post_writer">작성자 : {{ post.writer }} {{  post.id }}</p>
            <button class="editPost" @click="gotoDetail()">수정</button>
            <button class="deletePost" @click="deletePost">삭제</button>
        </div>
    </div>
    <div class="bg">
        <form class="comment">
            <p class="CommentTitle">Comment</p>
            <div class="commentContainer">
                <div v-for="comment in comments" :key="comment.id" class="commentItem">
                <p class="comment_writer">{{ comment.writer }}</p>
                <p class="comment_content">{{ comment.content }}</p>
                <button class="editComment" @click="editComment">수정</button>
                <button class="deleteComment" @click="deleteComment">삭제</button>
            </div>
            </div>
        </form>
        <div class="sendComment">
            <input class="writeComment" type="text" v-model="writeComment" placeholder="댓글을 입력하세요">
            <button class="uploadComment" type="submit" @click="sendData">GO</button>
        </div>
    </div>
    <router-view/>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      comments: [],
      writeComment: '',
      posts: [],
      username: null
    }
  },
  beforeMount () {
    this.fetchPosts()
    this.fetchUserData()
  },
  methods: {
    sendData () {
      const requestData = {
        content: this.writeComment
      }
      axios.post('/home', requestData)
        .then((response) => {
          const newComment = {
            id: response.data.id,
            content: this.writeComment
          }
          this.comments.push(newComment)
          this.writeComment = ''
        })
        .catch((error) => {
          console.error('Error: ' + error.message)
        })
    },
    async fetchPosts () {
      try {
        const response = await fetch('/home')
        const data = await response.json()
        this.posts = data
      } catch (error) {
        console.error('Error fetching posts', error)
      }
    },
    async fetchUserData () {
      try {
        const response = await fetch('/home')
        const data = await response.json()
        this.username = data.username
        this.comments = data.comments
      } catch (error) {
        console.error('Error fetching user data', error)
      }
    },
    gotoDetail (id) {
      this.$router.push('/post/' + id)
    }
  }
}
</script>
<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 75px;
    color: pink;
    background: hsl(324, 33%, 78%);
    display: flex;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.main {
    position: relative;
    left: 30px;
    -webkit-text-stroke: 1px white;
    border: none;
    background: none;
    font-size: xx-large;
    color: rgba(239, 201, 236, 0.85);
    font-weight: 900;
}
.main:hover {
    cursor: pointer;
}
.username {
    position: relative;
    left: 1150px;
    color: #896681;
    background-color: #FFD1DF;
    border: none;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    box-shadow: rgb(81, 81, 81, 0.3) 2px 3px;
    font-size: large;
    font-weight: 700;
    text-shadow: rgba(125, 125, 125, 0.3) 2px 2px;
}
.username:hover {
    cursor: pointer;
    background-color: #e1b8c4;
}
.write {
    position: relative;
    left: 950px;
    background-color: #FFEDFD;
    color: #65505F;
    border: none;
    border-radius: 10px;
    width: 90px;
    height: 40px;
    box-shadow: rgb(81, 81, 81, 0.3) 2px 3px;
    font-size: large;
    font-weight: 700;
    text-shadow: rgba(110, 110, 110, 0.3) 2px 2px;
}
.write:hover {
    cursor: pointer;
    background-color: #e2d0e0;
}
.comment {
    position: absolute;
    left: 1070px;
    top: 100px;
    width: 350px;
    height: 500px;
    overflow-y: scroll;
    background-color: #F8E7EE;
    border-radius: 10px 10px 0 0;
    box-shadow: rgba(129, 129, 129, 0.2) 3px 0 0 0;
}
.commentContainer {
    max-height: calc(100% - 60px); /* 댓글 폼 높이 제외 */
    overflow-y: auto;
    background-color: #F8E7EE;
}
.CommentTitle {
    position: relative;
    left: 20px;
    top: 0px;
    width: 60px;
    background-color: #F8E7EE;
    text-align: left;
    font-size: large;
    font-weight: 600;
    color: #896681;
    text-shadow: rgb(183, 183, 183, 0.8) 2px 2px;
}
.sendComment {
    position: absolute;
    left: 1070px;
    top: 600px;
    width: 330px;
    height: 50px;
    background-color: #F8E7EE;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: rgba(110, 110, 110, 0.2) 3px 5px 0 0;
}
.writeComment {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 330px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: white;
}
.writeComment:focus {
    outline: none;
}
.uploadComment {
    position: absolute;
    top: 15px;
    left: 260px;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: #E9D7E4;
    color: #50394B;
    box-shadow: rgb(128, 128, 128, 0.4) 2px 2px;
    margin-left: 10px;
}
.uploadComment:hover {
    cursor: pointer;
    background-color: #c8b8c4;
}
.bg {
    background-color: #fff1f7;
    overflow: hidden;
}

.postItem {
    position: relative;
    top: 80px;
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ffdef9;
    background-color: white;
}

.post_title,
.post_content,
.post_writer {
    background-color: white;
}

.commentItem {
    position: relative;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ffdef9;
    border-radius: 10px;
    background-color: white;
}

.comment_content,
.comment_writer {
    background-color: white;
}
button {
    cursor: pointer;
}
</style>
