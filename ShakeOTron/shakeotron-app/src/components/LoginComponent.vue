<template>
  
  <div id="login-container" v-if="!IsLoggedIn">
    <form @submit.prevent="login" id="login-form">
      <input type="text" id="username" placeholder="Username" v-model="username"/>
      <input type="password" id="password" placeholder="Password" v-model="password"/>
      <button type="submit" @click="tryLogin">Login</button>
    </form>
    <p v-if="error" class="error">{{ errormsg }}</p>
  </div>
</template>
   
   <script>
   
   export default {
       data() {
        return {
          IsLoggedIn: false,
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
            this.$emit('loggingIn', this.IsLoggedIn)
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
       }   
    }
   }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
   }
   button {
    background-color: rgb(139, 139, 139);
   }

   .error {
    transition-duration: 1.5s;
   }
   
   </style>