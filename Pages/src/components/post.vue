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
            <button class="cancel" @click="$router.push('/Home')">취소</button>
            <button class="upload" @click="$router.push('/Home')">게시</button>
        </div>
        <div id="app">
            <button class="heart" @click="EmotionHighlight" :class="{'heart': isHighlighted }">💖</button>
            <button class="fun">🤣</button>
            <button class="angry">🤬</button>
            <button class="sad">😢</button>
        </div>

        <!-- <button class="cottoncandy">
            <img src="https://cdn-icons-png.flaticon.com/512/298/298239.png?w=740&t=st=1690985568~exp=1690986168~hmac=b5bf32155d5b96c8688ad4c1d04768d6a26777aafcbcba7bb3f7066f62d5fad2"> 
        </button> -->
        

    </body>
    </div>
</template>

<script>
    export default ({
      el: '#app',
      data: {
        isHighlighted: false, // 강조 상태를 저장하는 데이터
      },
      methods: {
        EmotionHighlight() {
          // 강조 상태를 토글 (true -> false, false -> true)
          this.isHighlighted = !this.isHighlighted;
        }
      }
    });
</script>

<style>
body {
    display: inline-flex;
    align-items: center;
    background: #FFECF4;
}
.upBar {
    position: absolute;
    top: 80px;
    left: 280px;
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
    position: relative;
    top: 50px;
    left: 265px;
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
    top: 50px;
    left: 15px;
    border: none;
    resize: none;
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
.cancel {
    position: absolute;
    bottom: 90px;
    right: 360px;
    width: 60px;
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
.cancel:hover, .upload:hover {
    cursor: pointer;
    background-color: #d5c4d0;
}
.upload {
    position: absolute;
    bottom: 90px;
    right: 290px;
    width: 60px;
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

.heart {
    outline: none;
    position: absolute;
    bottom: 90px;
    left: 300px;
    padding: 7.5px 1px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    line-height: 30px;
    border: 2px solid rgb(255, 255, 255);
}

.fun {
    outline: none;
    position: absolute;
    bottom: 90px;
    left: 365px;
    padding: 7.5px 1px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    border: 2px solid rgb(255, 255, 255);
}

.sad {
    outline: none;
    position: absolute;
    bottom: 90px;
    left: 430px;
    padding: 10px 2px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    border: 2px solid rgb(255, 255, 255);
}

.angry {
    outline: none;
    position: absolute;
    bottom: 90px;
    left: 497px;
    padding: 10px 2px;
    border: none;
    border-radius: 50%;
    background: #ffffff;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    border: 2px solid rgb(255, 255, 255);
}

@keyframes movingBorders1 {
  0% {
    background-color: #F9D2EB;
  }

  50% {
    background-color: #F9D2EB;
  }

  90% {
    background-color: #F9D2EB;
  }
}

.heart:hover,.angry:hover {
    background-color: #ffffff;
    transform: scale(120%);
    animation: movingBorders1 5s infinite;
    
}

@keyframes movingBorders2 {
  0% {
    background-color: lightyellow;
  }

  50% {
    background-color: lightyellow;
  }

  90% {
    background-color: lightyellow;
  }
}

.fun:hover, .sad:hover {
    background-color: #ffffff;
    transform: scale(120%);
    animation: movingBorders2 5s infinite;
    
}

</style>