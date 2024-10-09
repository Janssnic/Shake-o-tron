<template>
  
  <div id="login-container">
    <form @submit.prevent="login" id="login-form">
      <input type="text" id="username" placeholder="Username"/>
      <input type="password" id="password" placeholder="Password"/>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
   
   <script>
   
   export default {
       data() {
        return {
          IsLoggedIn: false,
          username: ' ',
          password: ' ',
          error: ' ',
        }
       },
       methods: { 
        login() {
          if (this.username == 'admin' && this.password == 'admin') {
            this.IsLoggedIn = true
          }
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
    flex-direction: row; 
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
    flex-grow: 0;
   }
   
   </style>