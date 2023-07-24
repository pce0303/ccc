
<template>
    <div id="login">
        <div class="welcome">Welcome to COCACO!</div>
        <div class="signin">Sign In</div>
        <div class="signinbackground"></div>
        <div>
            <input class="ID" type=text name="id" placeholder="ID">
            <br><br>
            <input class="PS" type=text name="ps" placeholder="PassWord">
        </div>
        <button>SIGN IN</button>
        <!-- v-on:click="OnClickButton" -->
        <img src="">
    </div>
</template>

<style>
    * {
        background-color: #f9c3e6;
    }
    #login {
        overflow: hidden;
        width:800px;
        height: 400px;
        background-color: #FFD4F0;
        /* margin: 200px; */
        border-radius: 10px;
        position: relative;
        top: 115px;
        left: 370px; 
        right: 50px;
        filter: drop-shadow(10px 15px 10px rgba(0, 0, 0, 0.25));

    }

    .welcome {
        background-color: #FFD4F0;
        width: 517px;
        height: 98px;
        flex-shrink: 0;
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 50px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        position: relative;
        top: 135px;
        right: 50px;
    } 

    
    .signin {
        width: 241px;
        height: 47px;
        flex-shrink: 0;
        color: #000;
        background-color: white;
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        position:relative;
        z-index: 1;
        left: 475px;
        bottom: 20px;
    }

    .signinbackground {
        background-color: white;
        width: 500px;
        height: 400px;
        position:relative;
        bottom: 145px;
        left: 400px;

    }
    
    input {
        background-color: #D9D9D9;
        opacity: 0.7;
        font-family: Inter;
        font-weight: 700;
        width: 230px;
        height: 30px;
        position: relative;
        bottom: 380px;
        left: 203px;
        overflow: hidden;
        border-radius: 10px;
    }

    button {
        width: 273px;
        height: 44px;
        font-family: Inter;
        font-weight: 700;
        font-size: 20px;
        font-display: center;
        flex-shrink: 0;
        border-radius: 20px;
        background: rgba(242, 124, 160, 0.52);
        position:relative;
        bottom: 350px;
        right: -209px;
    }
</style>






<!-- 
<script>
    const app = new Vue ({
        el: '#login',
        methods: {
            OnClickButton() {
                console.log('SIGN IN!!!!')
            },
        },
    });
</script> -->