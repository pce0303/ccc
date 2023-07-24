<template>
  <div id="app">
    <header>
      <h1>COCACO</h1>
      <button class="login" v-on:click="goToLogin">Log In</button>
      <button class="write" v-on:click="writeNewPost">글 작성</button>
    </header>
    <body>
      <div class="comment">
        <p>Comment</p>
        <input class="writeComment" type="text">
      </div>
    </body>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
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
h1 {
  position: relative;
  left: 50px;
  -webkit-text-stroke: 1px white;
}
.login {
  position: relative;
  left: 1200px;
  color: #896681;
  background-color: #FFD1DF;
  border: none;
  border-radius: 10px;
  width: 90px;
  height: 40px;
  box-shadow: rgb(81, 81, 81, 0.3) 2px 3px;
  font-size: large;
  font-weight: 700;
  text-shadow: rgba(125, 125, 125, 0.3) 2px 2px;
}
.write {
  position: relative;
  left: 1000px;
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
.comment {
  position: relative;
  left: 1000px;
  bottom: 80px;
  width: 400px;
  height: 610px;
  background-color: #F8E7EE;
  border-radius: 10px;
  box-shadow: rgba(129, 129, 129, 0.2) 3px 5px 0 0;
}
p {
  position: relative;
  left: 20px;
  top: 20px;
  text-align: left;
  font-size: large;
  font-weight: 600;
  color: #896681;
  text-shadow: rgb(183, 183, 183, 0.8) 2px 2px;
}
.writeComment {
  position: relative;
  left: 10px;
  top: 530px;
  width: 380px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: white;
}
body {
  padding-top: 75px;
  background-color: #fff1f7;
}
</style>
