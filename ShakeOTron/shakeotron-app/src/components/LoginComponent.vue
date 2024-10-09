<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <br />
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
   div {
     padding: 0px;
     margin: 0px;
     display: flex;
     justify-content: center;
     flex-direction: row;
     position: sticky;
     bottom: 0;
     overflow: hidden;
     background-color: #333;
   }
   h3 {
     margin: 40px 0 0;
   }
   ul {
     list-style-type: none;
     padding: 1%;
   }
   li {
     display: inline-block;
     margin: 0 10px;
   }
   a {
     color: #42b983;
   }
   </style>