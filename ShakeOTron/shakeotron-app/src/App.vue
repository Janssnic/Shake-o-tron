<template>
  <LoginComponent @loggingIn ="LogIn"/>
  <div v-if="isLoggedIn">
    <NavigationComponent @navClicked="updatePage"/>
    <DrinksApi @likedDrink="addLikedDrink" @testedDrink="addTestedDrink"></DrinksApi>
    <LikedDrinks ref="likedDrinksComponent"/>
  </div>
</template>

<script>
import DrinksApi from './components/DrinksApi.vue';
import LoginComponent from './components/LoginComponent.vue';
import NavigationComponent from './components/NavigationComponent.vue';
import LikedDrinks from './components/LikedDrinks.vue';


export default {
  name: 'App',
  components: {
    LoginComponent,
    NavigationComponent,
    DrinksApi,
    LikedDrinks
  },
  data() {
    return {
      isLoggedIn: false, //true = alltid loggad in, FIX LATER
    }
  },
  
  methods: {
    addLikedDrink(drink) {
      this.$refs.likedDrinksComponent.addLikedDrink(drink);
    },
    addTestedDrink(drink) {
      this.$refs.likedDrinksComponent.addTestedDrink(drink);
  },
  LogIn(login) {
      this.isLoggedIn = login
      console.log("App login changed" + this.isLoggedIn)
    },
  
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
</style>