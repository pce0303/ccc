
<template>
    <div id="login">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div class="welcome">Welcome to COCACO!</div>
        <div class="signin">Sign In</div>
        <div class="signinbackground"></div>
        <div>
            <input class="ID" type=text name="id" placeholder="ID">
            <br><br>
            <input class="PS" type=text name="ps" placeholder="PassWord">
        </div>
        <button class ="SIGNIN" @click="goToLogin">SIGN IN</button>
        <router-view></router-view>
        <div class="container"></div>
        <!-- v-on:click="OnClickButton" -->
        <!-- <div v-html="svgContent" class="svg"></div> -->
    </div>
   
</template>

  <script>
    export default {
      methods: {
        goToLogin() {
          this.$router.push('/')
        }
      }
    }
    
  </script>

<!-- <script>
    export default {
        data() {
            return {
                svgContent: `
        <svg xmlns="http://www.w3.org/2000/svg" width="1402" height="832" viewBox="0 0 1402 832" fill="none">
            <g filter="url(#filter0_d_37_46)">
        <path d="M1638.6 820.377C1633.76 1009.77 1471.2 1159.25 1275.52 1154.24C1079.84 1149.23 325.285 1148.25 110 960.5C-380.896 24.3555 1128.65 842.244 1347.66 -23.991C1543.34 -18.9847 1643.45 630.984 1638.6 820.377Z" fill="url(#paint0_radial_37_46)" shape-rendering="crispEdges"/>
        </g>
        <defs>
        <filter id="filter0_d_37_46" x="0.408569" y="-23.991" width="1638.36" height="1186.35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-8" dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_46"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_46" result="shape"/>
        </filter>
        <radialGradient id="paint0_radial_37_46" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1387 834.5) rotate(-172.26) scale(1340.21 1346.56)">
        <stop stop-color="white" stop-opacity="0.5"/>
        <stop offset="0.2" stop-color="#FFAAF1" stop-opacity="0.5"/>
        <stop offset="0.4" stop-color="#FFA1EA" stop-opacity="0.5"/>
        <stop offset="0.8" stop-color="#FF73E0" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#FF91B9" stop-opacity="0.5"/>
        </radialGradient>
        </defs>
        </svg>
      `
    };
  }
}

</script> -->

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
/*
    .svg {
        /* width: 1629.76px;
        height: 1180.204px; */
        /* transform: rotate(1.466deg);
        flex-shrink: 0;
        fill: radial-gradient(113.99% 82.68% at 84.59% 72.63%, rgba(255, 255, 255, 0.50) 0%, rgba(255, 170, 241, 0.50) 20.00%, rgba(255, 161, 234, 0.50) 40.00%, rgba(255, 115, 224, 0.50) 80.00%, rgba(255, 145, 185, 0.50) 100%);
        filter: drop-shadow(-8px 4px 4px rgba(0, 0, 0, 0.25));
        position: absolute;
        bottom: 0; 
        /* left: 0;  */
        /* width: 100%; 
        height: 100%;  */
        /* pointer-events: none; */
        /* top: 0;
        margin:auto;
    } */

    .container {
    /* Set display to flex and flex direction to column for vertical layout */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center children */
    align-items: center; /* Horizontally center children */
    min-height: 100vh; /* Ensure the container takes the full viewport height */
  }

</style>



<!-- <script >
export default {
  name: 'MyComponent',
  
};
</script> -->

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