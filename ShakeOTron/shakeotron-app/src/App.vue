<template>
  <div v-if ="!isLoggedIn">
  <LoginComponent @logIn ="logIn"/>
  </div>
    <div v-if="isLoggedIn">
      <NavigationComponent @navClicked="navTo" @logIn ="logIn"/>
      <div v-if='navState == "home"'>
      <!-- Put Home component here -->
       <h1>Really nice homepage comming</h1>
      </div>
      <div v-if='navState == "drinks"'>
        <DrinksApi @likedDrink="addLikedDrink" @testedDrink="addTestedDrink"></DrinksApi>
      </div>
      <div v-if='navState == "account"'>
        <!-- Account component here-->
        {{ username }}
      </div>
      <div v-if='navState == "sobertest"'>
        <SobrietyCheck/>
      </div>
      <LikedDrinks ref="likedDrinksComponent"/>
  </div>
</template>

<script>
import DrinksApi from './components/DrinksApi.vue';
import LoginComponent from './components/LoginComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import LikedDrinks from './components/LikedDrinks.vue';
import SobrietyCheck from './components/SobrietyCheck.vue';



export default {
  name: 'App',
  components: {
    LoginComponent,
    NavigationComponent,
    DrinksApi,
    LikedDrinks,
    SobrietyCheck,

  },
  data() {
    return {
      isLoggedIn: true, //true = alltid loggad in och skippa login step, FIX LATER
      username: '',
      navState: 'home',
    }
  },
  
  methods: {
    addLikedDrink(drink) {
      this.$refs.likedDrinksComponent.addLikedDrink(drink);
    },
    addTestedDrink(drink) {
      this.$refs.likedDrinksComponent.addTestedDrink(drink);
    },
    logIn(login, username) {
      this.isLoggedIn = login
      this.username = username
    },
    navTo(page) {
      this.navState = page
    }
  
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;    /* Fix this??? */
  margin-top: 0px;
  padding: 0px;
}
li {
  list-style: none;
}
.error {
    color: red
   }
</style>