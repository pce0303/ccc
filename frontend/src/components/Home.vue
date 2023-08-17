<template>
    <div id="home">
    <header>
        <button class="main" @click="$router.push('/')">COCACO</button>
        <button class="username" @click="$router.push('/profile')">{{ req.session.username }}</button>
        <button class="write" @click="$router.push('/new-post')">글 작성</button>
    </header>
    <body>
        <!-- <form class="postForm"></form> -->
        <form class="comment">
            <p class="CommentTitle">Comment</p>
            <div v-for="comment in commnets" :key="comment.id">
                {{ comment.text }}
            </div>
            <input class="writeComment" type="text" v-model="writeComment" placeholder="댓글을 입력하세요">
            <button class="uploadComment" type="submit" @click="sendData">GO</button>
        </form>
    </body>
    <router-view/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      comments: [],
      newComment: ''
    }
  },
  methods: {
    sendData () {
      this.$http
        .post('/home', {
          content: this.newComment
        })
        .then((response) => {
          const newComment = { id: response.data.id, content: this.newComment }
          this.comments.push(newComment)
          this.newComment = ''
        })
        .catch((error) => {
          console.error('Error:', error.message)
        })
    }
  }
}

// const postBoxes = document.querySelector('.postForm')
// const newPost = document.createElement('form')
// newPost.className = 'postBox'
// newPost.innerHTML = ``
// postBoxes.appendChild(newPost)

</script>
<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
    height: 590px;
    background-color: #F8E7EE;
    border-radius: 10px 10px 10px 10px;
    box-shadow: rgba(129, 129, 129, 0.2) 3px 5px 0 0;
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
.writeComment {
    position: relative;
    left: 10px;
    top: 480px;
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
    position: relative;
    top: 480px;
    left: 25px;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: #E9D7E4;
    color: #50394B;
    box-shadow: rgb(128, 128, 128, 0.4) 2px 2px;
}
.uploadComment:hover {
    cursor: pointer;
    background-color: #c8b8c4;
}
body {
    background-color: #fff1f7;
    overflow: hidden;
}
</style>
