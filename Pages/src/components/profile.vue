<template>
    <div id="profile">
        <div class="img">
            <!-- <img src="https://pbs.twimg.com/media/EbviXFOU4AUv1sP.jpg" width="270px" height="270px"> -->
            <form action="upload" method="post" enctype="multipart/form-data">
                <input type="file" name="profile" accept="image/*">
                <input type="submit">
            </form>
        </div>
        <!-- <button class="upload">사진 업로드</button> -->
        <input class="upload" type="file" placeholder="사진 업로드">
        
        <input class="name" type=text name="ps" placeholder="이름">
        <button class="cancel" @click="goToLogin">취소</button>
        <button class="storage" @click="goToLogin">저장</button>
        <div class="bar"></div>
    </div> 
</template>

<script>
    export default {
      methods: {
        goToLogin() {
          this.$router.push('/Home')
        }
      }
    }
    
  </script>

<style>

    * {
        background-color: #f9d2eb;
    }
    
    #profile {
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
    }

    .upload {
        position:relative;
        bottom: 140px;
        right: -37px; 
        display: inline-block;
        padding: 12px 28px;
        font-size: 20px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-image: linear-gradient(to bottom right, #ffc2ea, #ff56c4);
        border: none;
        border-radius: 40px;
        box-shadow: 0px 4px 0px #965779;
        transition: all 0.2s ease-in-out;
    }

    .upload:hover {
        transform: translateY(-2px);
        box-shadow: 0px 5px 0px #965779;
    }

    .upload:active {
        transform: translateY(0px);
        box-shadow: none;
        background-image: linear-gradient(to bottom right, #ff64e0, #ffc2ea);
    }

    .upload:before {
        top: -3px;
        left: -3px;
        border-radius: 40px;
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
    }

    .upload:after {
        top: -3px;
        right: -3px;
        border-radius: 40px;
        border-bottom: 3px solid #fff;
        border-right: 3px solid #fff;
    }

    .name {
        background-color: #ffffff;
        opacity: 0.7;
        font-family: Inter;
        font-weight: 700;
        max-width: 235px;
        height: 33px;
        position: relative;
        bottom:100px;
        left: 200px;
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
        bottom: 0px;
        right:-90px;
    }

    .cancel:hover {
        letter-spacing: 3px;
        background-color: #ff80d97a;
        color:rgb(255, 255, 255);
        box-shadow: rgb(166, 155, 166) 0px 7px 29px 0px;
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
        bottom: 0px;
        right: -95px;
    }

    .storage:hover {
        letter-spacing: 3px;
        background-color: #ff80d97a;
        color:rgb(255, 255, 255);
        box-shadow: rgb(166, 155, 166) 0px 7px 29px 0px;
    }

    .storage:active {
        letter-spacing: 3px;
        background-color: #fb4dbe78;
    }



</style>