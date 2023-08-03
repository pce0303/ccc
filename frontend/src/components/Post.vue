<template>
    <div id="post">
    <body>
        <div class="writeBox">
            <textarea class="PostValue" placeholder="내용을 입력하세요"></textarea>
        </div>
        <div class="upBar">
            <textarea class="PostTitle" placeholder="제목"></textarea>
        </div>
        <div class="buttons">
            <button class="cancelPost" @click="$router.push('/dashboard')">취소</button>
            <button class="uploadPost" @click="$router.push('/dashboard')">게시</button>
        </div>
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
.PostValue {
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
.PostValue:focus {
    outline: none;
}
.cancelPost {
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
.cancelPost:hover, .upload:hover {
    cursor: pointer;
    background-color: #d5c4d0;
}
.uploadPost {
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
</style>
