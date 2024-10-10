<template>
  <div id="logo-container">
      <img id="logo" src="../assets/logo.png">
    </div>
    <div id="signUp-container">
        <h2>Sign up here</h2>
        <form @submit.prevent="" id="signup-form">
            <input type="text" id="username" placeholder="Username" v-model="username"/>
            <input type="email" id="email" placeholder="Email@email.com" v-model="email">
            <input type="password" id="password" placeholder="Password" v-model="password"/>
            <input type="password" id="confirmPassword" placeholder="Confirm Password" v-model="confirmPassword">
            <label>What is your favourite cocktail?</label>
            <input type="text" id="favCocktail" placeholder="Home-made apple wine..." v-model="favCocktail">
            <button type="submit" @click="signUp">Sign up</button>
            <p v-if="error" class="error">{{ errormsg }}</p>
        </form>
    </div>
  </template>
<script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        favCocktail: '',
        error: '',
        errormsg: "There was an error when signing up",

        }
    },
    methods: {
        signUp(){
            if (this.username.trim() !== '' && this.email.trim() !== '' && this.password.trim() !== '' && this.password == this.confirmPassword) {
                console.log("It works")
                let user = [this.username, this.email, this.password, this.favCocktail]
                let userData = JSON.stringify(user)
                localStorage.setItem('user', userData)

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
    },
}
      

</script>
<style scoped>
#signUp-container {
    margin-top: 100px;
}
#signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
input {
    margin-bottom: 10px;
}
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

</style>