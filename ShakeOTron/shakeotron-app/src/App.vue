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
      likedDrinks: [],
      testedDrinks: []
    }
  },
  
  methods: {
    addLikedDrink(drink) {
      this.$refs.likedDrinksComponent.addLikedDrink(drink);
    },
    addTestedDrink(drink) { //en array med 5 senaste testade drinks
      if (this.testedDrinks.length >= 5) {
        this.testedDrinks.shift() //deletar första item
      }
      this.testedDrinks.push(drink) //lägger till ny item
      localStorage.setItem('testedDrinks', JSON.stringify(this.testedDrinks))
      console.log("added", drink, " to tested drinks")
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
</style>
