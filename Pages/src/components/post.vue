<template>
    <div id="post">
    <body>
        <div class="writeBox">
            <textarea class="value" placeholder="내용을 입력하세요"></textarea>
        </div>
        <div class="upBar">
            <textarea class="title" placeholder="제목"></textarea>
        </div>
        <div class="buttons">
            <button class="cancelPost" @click="$router.push('/Home')">취소</button>
            <button class="uploadPost" @click="$router.push('/Home')">게시</button>
        </div>
        <div id="emotion">
            <button class="heart" @click="HeartHighlight" :class="{'highlight': isHighlighted1 }">💖</button>
            <button class="fun" @click="FunHighlight" :class="{'highlight': isHighlighted2 }">🤣</button>
            <button class="angry" @click="SadHighlight" :class="{'highlight': isHighlighted3 }">🤬</button>
            <button class="sad" @click="AngryHighlight" :class="{'highlight': isHighlighted4 }">😢</button>
            
        </div>
    </body>
    </div>
</template>

<script>
    export default ({
      data() {
        return {
          isHighlighted1: false, // CSS 변경 상태를 저장하는 데이터
          isHighlighted2: false,
          isHighlighted3: false,
          isHighlighted4: false
        };
      },
      methods: {
        HeartHighlight() {
          // CSS 변경 상태를 토글 (true -> false, false -> true)
          this.isHighlighted1 = !this.isHighlighted1;
        },
        FunHighlight() {
          // CSS 변경 상태를 토글 (true -> false, false -> true)
          this.isHighlighted2 = !this.isHighlighted2;
        },
        SadHighlight() {
          // CSS 변경 상태를 토글 (true -> false, false -> true)
          this.isHighlighted3 = !this.isHighlighted3;
        },
        AngryHighlight() {
          // CSS 변경 상태를 토글 (true -> false, false -> true)
          this.isHighlighted4 = !this.isHighlighted4;
        }
      }
    });
</script>

<style>

.upBar {
    position: absolute;
    top: 110px;
    left: 380px;
    width: 1000px;
    height: 70px;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
    background: #F3DFE9;
}
.title {
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
.title:focus {
    outline: none;
}
.writeBox {
    position: absolute;
    top: 140px;
    left: 380px;
    width: 1000px;
    height: 550px;
    flex-shrink: 0;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.25);
}
.value {
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
.value:focus {
    outline: none;
}
.cancelPost {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 150px;
    right: 420px;
    height: 30px;
    width:60px;
    border: none;
    border-radius: 30px;
    background: #E9D7E4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #50394B;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
}
.cancelPost:hover, .uploadPost:hover {
    cursor: pointer;
    background-color: #d5c4d0;
}
.uploadPost {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 150px;
    right: 350px;
    height: 30px;
    width: 60px;
    border: none;
    border-radius: 30px;
    background: #E9D7E4;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #50394B;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
}

.heart {
    outline: none;
    position: absolute;
    bottom: 150px;
    left: 400px;
    padding: 10px 2px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    line-height: 30px;
}

.heart.highlight {
  width: 75px;
  height: 75px;
  left: 400px;
  font-size: 50px;
  background-color: #ffc9df;
}

.heart.highlight:hover {
    background-color: rgb(255, 175, 215);
}


.fun {
    outline: none;
    position: absolute;
    bottom: 150px;
    left: 485px;
    padding: 10px 2px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
}

.fun.highlight {
  width: 75px;
  height: 75px;
  left: 485px;
  font-size: 50px;
  background-color: rgb(249, 249, 145);
}

.fun.highlight:hover {
  background-color: rgb(244, 244, 53);
}

.sad {
    outline: none;
    position: absolute;
    bottom: 150px;
    left: 570px;
    padding: 10px 2px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
}

.sad.highlight {
  width: 75px;
  height: 75px;
  left: 570px;
  font-size: 50px;
  background-color: rgb(249, 249, 145);
}

.sad.highlight:hover {
  background-color: rgb(244, 244, 53);
}

.angry {
    outline: none;
    position: absolute;
    bottom: 150px;
    left: 655px;
    padding: 10px 2px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
}

.angry.highlight {
  width: 75px;
  height: 75px;
  left: 655px;
  font-size: 50px;
  background-color: #ffc9df;
}

.angry.highlight:hover {
    background-color: rgb(255, 175, 215);
}

.heart:hover,.angry:hover {
    background-color: #ffc9df;
    transform: scale(120%);
}

.fun:hover, .sad:hover {
    background-color: rgb(248, 248, 151);
    transform: scale(120%);
}

</style>