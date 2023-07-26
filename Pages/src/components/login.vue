
<template>
    <div id="login">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div class="welcome">Welcome to<br>COCACO!</div>
        <div class="signin">Sign In</div>
        <div class="signinbackground"></div>
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <input class="ID" type=text name="id" placeholder="ID">
            <br><br>
            <input class="PS" type=text name="ps" placeholder="PassWord">
            <button class ="SIGNIN" @click="$router.push('/')">SIGN IN</button>
        </div>
        <router-view></router-view>
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
        left: 550px;
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
        max-width: 230px;
        height: 30px;
        position: relative;
        bottom: 390px;
        left: 203px;
        overflow: hidden;
        border-radius: 10px;
        width: 100%;
        padding: 5px;
        border-radius: 12px;
        border: 1.5px solid lightgrey;
        outline: none;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        box-shadow: 0px 0px 20px -18px;
    }

    input:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    input:active {
        transform: scale(0.95);
    }

    input:focus {
        border: 2px solid grey;
    }

    .SIGNIN {
        /* width: 273px;
        height: 44px;
        font-family: Inter;
        font-weight: 700;
        font-size: 20px;
        font-display: center;
        flex-shrink: 0;
        border-radius: 20px;
        background: rgba(245, 147, 211, 0.52);*/
        position:relative;
        bottom: 370px;
        right: -209px;
        display: inline-block;
        padding: 12px 28px;
        margin: 10px;
        font-size: 24px;
        font-weight: bold;
        text-transform: uppercase;
        color: #fff;
        background-image: linear-gradient(to bottom right, #ffc2ea, #ff56c4);
        border: none;
        border-radius: 40px;
        box-shadow: 0px 4px 0px #965779;
        transition: all 0.2s ease-in-out;
    }

    .SIGNIN:hover {
        transform: translateY(-2px);
        box-shadow: 0px 5px 0px #965779;
    }

    .SIGNIN:active {
        transform: translateY(0px);
        box-shadow: none;
        background-image: linear-gradient(to bottom right, #ff64e0, #ffc2ea);
    }

    .SIGNIN:before, .SIGNIN:after {
        content: "";
        position: absolute;
        width:0;
        height:0;
    }

    .SIGNIN:before {
        top: -3px;
        left: -3px;
        border-radius: 40px;
        border-top: 3px solid #fff;
        border-left: 3px solid #fff;
    }

    .SIGNIN:after {
        top: -3px;
        right: -3px;
        border-radius: 40px;
        border-bottom: 3px solid #fff;
        border-right: 3px solid #fff;
    }

</style>
