<template>
    <div id="profile">
        <div class="img">사진</div>
        <button class="upload">사진 업로드</button>
        <div class="name">이름</div>
    </div>
</template>

<style>
    #profile {
        width:700px;
        height: 400px;
        background-color: #FFD4F0;
        margin: 200px;
        border-radius: 50px;
    }

    .img {
        width: 300px;
        height:300px;
        background-color: #12000E;
        border-radius: 50%;
        position: relative;
        top: 50px;
        right: -40px;

    }
    .upload {
        width: 300px;
        height: 50px;
        border-radius: 30px;
        background: rgba(208, 204, 207, 0.59);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #775770;
        flex-shrink: 0;
        font-family: 'Inter';
        font-size: 24px;
        font-style: border;
        font-weight: 500;
        line-height: 30px;
    }

</style>