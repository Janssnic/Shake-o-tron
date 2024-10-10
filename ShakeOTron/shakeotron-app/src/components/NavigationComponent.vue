<template>
  <div id="top">
  <div id="logo-container" @click="navHome">
      <img id="logo" src="../assets/logo.png">
    </div>
 <div id="nav-container">
    <ul>
      <li @click="navHome">Home</li>
    
      <li @click="navDrinks">Drinks</li>
    
      <li @click="navAccount">Account</li>
    
      <li @click="navSoberTest">Sober-Test</li>

      <li @click="logout">tempLogoutButton</li>
    </ul>
  </div>
</div>

</template>

<script>

export default {
    data() {
      return {
      }
    },
    methods:{
      navHome(){
        console.log('Home clicked')
      },
      navDrinks() {
        console.log('Drinks clicked')
      },
      navAccount() {
        console.log('Account clicked')
        console.log(JSON.parse(localStorage.getItem('user')))
      },
      navSoberTest() {
        console.log('Sober-Test clicked')
      },
      logout() {
        this.$emit('logIn', false, "username?")
      }
    }
    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top  {
  display: flex;
  flex-direction: row;
  border-bottom: solid rgb(125, 125, 125) 1px;
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
#nav-container {
  width: 100%;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0px;
  margin: 0;
}
li {
  padding: 10px;
  font-size: x-large;
  color: #3b3b3b;
  cursor: pointer;
}
li:hover{
  background-color: blue;
  transition-duration: 1000ms;
  
}

a {
  color: #42b983;
}
</style>