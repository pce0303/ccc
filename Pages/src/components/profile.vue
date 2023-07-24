<template>
    <div id="profile">
        <div class="img">
            <img src="https://pbs.twimg.com/media/EbviXFOU4AUv1sP.jpg" width="270px" height="270px">
        </div>
        <button class="upload">사진 업로드</button>
        <div class="name">이름</div>
        <div class="namebackground"></div>
    </div>
</template>

<style>
    #profile {
        width:700px;
        height: 400px;
        background-clip: padding-box;
        background-color: #FFD4F0;
        margin: 200px;
        border-radius: 50px;
    }

    .img {
        width: 270px;
        height:270px;
        overflow: hidden;
        background-clip: padding-box;
        background-color: #12000E;
        border-radius: 50%;
        position: relative;
        top: 70px;
        right: -40px;

    }
    .upload {
        width: 200px;
        height: 45px;
        border-radius: 30px;
        background-clip: padding-box;
        background: rgb(224, 224, 224);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: black;
        flex-shrink: 0;
        font-family: Inter;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
        position: relative;
        top: -115px;
        right: -85px;
    }

    .name {
        background-color: white;
        width: 300px;
        height: 40px;
        border-radius: 30px;
        flex-shrink: 0;
        color: #000;
        opacity: 0.7;;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position:relative;
        left: 330px;
        bottom: 90px; 
    }
    
</style>