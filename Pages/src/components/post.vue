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
            <button class="cancel" @click="$router.push('/')">취소</button>
            <button class="upload" @click="$router.push('/')">게시</button>
        </div>
        <button class="heart"></button>
        <button class="fun"></button>
        <button class="angry"></button>
        <button class="cottoncandy">
            <img src="https://cdn-icons-png.flaticon.com/512/298/298239.png?w=740&t=st=1690985568~exp=1690986168~hmac=b5bf32155d5b96c8688ad4c1d04768d6a26777aafcbcba7bb3f7066f62d5fad2"> 
        </button>
        <button class="heart">💖</button>

    </body>
    </div>
</template>

<script>
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

/* .cottoncandy {
    background-color: white;
    border-radius: 50%;
    position: absolute;
    bottom: 90px;
    left: 100px;
    width: 60px;
    height: 30px;
    object-fit: fill;
} */

.heart {
    background-color: white;
    border-radius: 50px;
    font-size: large;
    position: absolute;
    bottom: 90px;
    left: 500px;
    width: 60px;
    height: 30px;
}
</style>