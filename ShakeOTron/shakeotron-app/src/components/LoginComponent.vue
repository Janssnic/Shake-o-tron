<template>
<div id="logo-container" v-if="!IsLoggedIn && !goSignup">
      <img id="logo" src="../assets/logo.png">
    </div>
  <div id="login-container" v-if="!IsLoggedIn && !goSignup">
    <h2>Log in here</h2>
    <form @submit.prevent="login" id="login-form">
      <input type="text" id="username" placeholder="Username" v-model="username"/>
      <input type="password" id="password" placeholder="Password" v-model="password"/>
      <button type="submit" @click="tryLogin">Login</button>
    </form>
    <p v-if="error" class="error">{{ errormsg }}</p>
  <lable id="signUpLink" @click="goSignUp">Don't have an account?</lable>
  </div>
  <div v-if="goSignup">
  <SignUpComponent @SignUpAccount ="signUpAccount"/>
  <label id="signUpLink" @click="goSignUp">Already have an account</label>
  </div>
</template>
   
   <script>
import SignUpComponent from './SignUpComponent.vue';

   
   export default {
    components: {
      SignUpComponent,
    },
       data() {
        return {
          IsLoggedIn: false,
          goSignup: false,
          username: '',
          password: '',
          error: false,
          errormsg: 'There was an error when logging in, try "test, 1234"'
        }
       },
       methods: { 
        tryLogin() {
          if (this.username == 'test' && this.password == '1234') {
            this.IsLoggedIn = true
            this.$emit('logIn', this.IsLoggedIn, this.username)
          }
          if (this.username == JSON.parse(localStorage.getItem('user'))[0] && this.password == JSON.parse(localStorage.getItem('user'))[2]) {
            this.IsLoggedIn = true
            this.username = JSON.parse(localStorage.getItem('user'))[0]
            this.$emit('logIn', this.IsLoggedIn, this.username)
          } 
          else {
            this.displayError()
          }
       },
       displayError() {
        this.error = true
        setTimeout(() => {
          this.error = false
        }, 5000)
       },
       goSignUp(){
        this.goSignup = !this.goSignup
        console.log("signup clicked")
         },
         signUpAccount(signup, username){
          this.IsLoggedIn = signup
          this.username = username
          this.$emit('logIn', this.IsLoggedIn, this.username) 
      },
    }
  }

   </script>
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   #logo-container {
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px
}
#logo {
  width: 50px;
  margin: 0px
}
   #login-container {
    height: 400px;
    padding: 0px;
    margin: 0px;
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    bottom: 0;
    overflow: hidden;
   }
   #login-form {
    height: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
   }
   button {
    
   }
   #signUpLink{
    color: #0080ff;
    cursor: pointer;
   }
   
   </style>