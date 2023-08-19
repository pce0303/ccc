
<template>
  <div id="Register">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <div class="join">Join the<br>COCACO!</div>
      <div class="register">Register</div>
      <div class="registerBackground"></div>
      <div>
          <input class="ID" type="text" name="id" v-model="username" placeholder="ID">
          <br><br>
          <input class="PS" type="text" name="ps" v-model="password" placeholder="PassWord">
      </div>
      <button class ="registerButton" @click="sendData">Register</button>
      <router-view></router-view>
      <div class="container"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // goToLogin () {
    //   this.$router.push('/login')
    // },
    sendData () {
      this.$http
        .post('/register', {
          username: this.username,
          password: this.password
        })
        .then((response) => {
          console.log(response.data)

          if (response.data.message === 'Registration Successful') {
            alert('Registration successful! You can now log in.')
            this.router.push('/login')
          } else if (response.data.message === 'Username already exists') {
            alert('Username already exists. Please choose a different username.')
          } else {
            alert('An error occurred. Please try again later.')
          }
        })
        .catch((error) => {
          console.error('Error:', error.message)
        })
    }
  }
}

</script>
<style>
   * {
      background-color: #f9c3e6;
  }
  #Register {
      overflow: hidden;
      width:800px;
      height: 400px;
      background-color: #FFD4F0;
      border-radius: 10px;
      position: relative;
      top: 150px;
      left: 400px;
      right: 10px;
      filter: drop-shadow(10px 15px 10px rgba(0, 0, 0, 0.25));
  }

  .join {
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
  .register {
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
      left: 500px;
      bottom: 20px;
  }

  .registerBackground {
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
      left: 480px;
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

  .registerButton {
      position:relative;
      bottom: 370px;
      left: 500px;
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

  .registerButton:hover {
      transform: translateY(-2px);
      box-shadow: 0px 5px 0px #965779;
  }

  .registerButton:active {
      transform: translateY(0px);
      box-shadow: none;
      background-image: linear-gradient(to bottom right, #ff64e0, #ffc2ea);
  }

  .registerButton:before {
      top: -3px;
      left: -3px;
      border-radius: 40px;
      border-top: 3px solid #fff;
      border-left: 3px solid #fff;
  }

  .registerInButton:after {
      top: -3px;
      right: -3px;
      border-radius: 40px;
      border-bottom: 3px solid #fff;
      border-right: 3px solid #fff;
  }

  .container {
  /* Set display to flex and flex direction to column for vertical layout */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center children */
  align-items: center; /* Horizontally center children */
  min-height: 100vh; /* Ensure the container takes the full viewport height */
  }

</style>
