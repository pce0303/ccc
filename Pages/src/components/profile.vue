<template>
    <div id="profile">
        <div class="img">
            <img src="https://pbs.twimg.com/media/EbviXFOU4AUv1sP.jpg" width="270px" height="270px">
        </div>
        <button class="upload">사진 업로드</button>
        <input class="name" type=text name="ps" placeholder="이름">
        <button class="cancel" @click="$router.push('/')">취소</button>
        <button class="storage" @click="$router.push('/')">저장</button>
    </div>
</template>

<style>
/* 초은컴 */
@media (max-width: 1440px),(max-height:900px) {
    * {
        background-color: #f9d2eb;
    }
    #profile {
        /* width:700px;
        height: 400px;
        background-clip: padding-box;
        background-color: #FFD4F0;
        margin: 200px;
        border-radius: 50px;
        position:relative;
        top: 35px;
        left: 230px;
        right: 50px; */
        width: 700px;
        height: 400px;
        background-clip: padding-box;
        background-color: #ffc2ea;
        border-radius: 10px;
        box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        -webkit-text-stroke:2px black;

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
        right: -350px;
    }

    .upload:hover {
        background-color: #f6bae1;
    }

    .name {
        background-color: #ffffff;
        opacity: 0.7;
        font-family: Inter;
        font-weight: 700;
        max-width: 235px;
        height: 33px;
        position: relative;
        bottom: 45px;
        right: -140px;
        overflow: hidden;
        border-radius: 30px;
        width: 100%;
        padding: 5px;
        border: 1.5px solid lightgrey;
        outline: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 0px 0px 20px -18px;
    }

    .name:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    .name:active {
        transform: scale(0.95);
    }

    .name:focus {
        border: 2px solid grey;
    }

    .cancel {
        padding: 15px 35px;
        border-radius: 50px;
        border: 0;
        background-color: white;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 15px;
        transition: all .5s ease;
        position: relative;
        bottom: -55px;
        right: 10px;
    }

    .cancel:hover {
        letter-spacing: 3px;
        background-color: #ff80d97a;
        color:rgb(255, 255, 255);
        box-shadow: rgb(255, 180, 255) 0px 7px 29px 0px;
    }

    .cancel:active {
        letter-spacing: 3px;
        background-color: #fb4dbe78;
    }

    .storage {
        padding: 15px 35px;
        border-radius: 50px;
        border: 0;
        background-color: white;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 15px;
        font-family: "Inter";
        font-weight: 500;
        transition: all .5s ease;
        position: relative;
        bottom: -55px;
        right: 5px;
    }

    .storage:hover {
        letter-spacing: 3px;
        background-color: #ff80d97a;
        color:rgb(255, 255, 255);
        box-shadow: rgb(255, 180, 255) 0px 7px 29px 0px;
    }

    .storage:active {
        letter-spacing: 3px;
        background-color: #fb4dbe78;
    }
}
/* 예슬컴 */
@media (max-width: 1920), (max-height: 1080) {
    * {
        background-color: #f9d2eb;
    }
    #profile {
        /* width:700px;
        height: 400px;
        background-clip: padding-box;
        background-color: #FFD4F0;
        margin: 200px;
        border-radius: 50px;
        position:relative;
        top: 35px;
        left: 230px;
        right: 50px; */
        width: 700px;
        height: 400px;
        background-clip: padding-box;
        background-color: #ffc2ea;
        border-radius: 10px;
        box-shadow: 5px 10px 10px 0px rgba(0, 0, 0, 0.25);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        -webkit-text-stroke:2px black;

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

    .upload:hover {
        background-color: #f6bae1;
    }

    .name {
        background-color: #ffffff;
        opacity: 0.7;
        font-family: Inter;
        font-weight: 700;
        max-width: 235px;
        height: 33px;
        position: relative;
        bottom: 45px;
        right: -120px;
        overflow: hidden;
        border-radius: 30px;
        width: 100%;
        padding: 5px;
        border: 1.5px solid lightgrey;
        outline: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 0px 0px 20px -18px;
    }

    .name:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    .name:active {
        transform: scale(0.95);
    }

    .name:focus {
        border: 2px solid grey;
    }

    .cancel {
        padding: 15px 35px;
        border-radius: 50px;
        border: 0;
        background-color: white;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 15px;
        transition: all .5s ease;
        position: relative;
        bottom: -55px;
        right: 10px;
    }

    .cancel:hover {
        letter-spacing: 3px;
        background-color: #ff80d97a;
        color:rgb(255, 255, 255);
        box-shadow: rgb(255, 180, 255) 0px 7px 29px 0px;
    }

    .cancel:active {
        letter-spacing: 3px;
        background-color: #fb4dbe78;
    }

    .storage {
        padding: 15px 35px;
        border-radius: 50px;
        border: 0;
        background-color: white;
        box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 15px;
        font-family: "Inter";
        font-weight: 500;
        transition: all .5s ease;
        position: relative;
        bottom: -55px;
        right: 5px;
    }

    .storage:hover {
        letter-spacing: 3px;
        background-color: #ff80d97a;
        color:rgb(255, 255, 255);
        box-shadow: rgb(255, 180, 255) 0px 7px 29px 0px;
    }

    .storage:active {
        letter-spacing: 3px;
        background-color: #fb4dbe78;
    }
}

</style>
