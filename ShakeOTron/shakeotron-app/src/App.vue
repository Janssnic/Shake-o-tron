<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Navigation name="navigation menu" />
  <h1>Hellooo</h1>

  <DrinksApi @likedDrink="addLikedDrink"></DrinksApi>

</template>



<script>
import DrinksApi from './components/DrinksApi.vue';
import Navigation from './components/Navigation.vue';


export default {
  name: 'App',
  components: {
    Navigation,
    DrinksApi
  },
  data() {
    return {
      likedDrinks: []
    }
  },
  created() { //checkar om det finns liked drinks i localstorage och sparar dem i likeddrinks arrayn
    const storedDrinks = localStorage.getItem("likedDrinks")
    if (storedDrinks) {
      this.likedDrinks = JSON.parse(storedDrinks)
    }
    else {
      this.likedDrinks = []
    }
    console.log("stored drinks", this.likedDrinks)
  },
  methods: {
    addLikedDrink(drink) { //checkar om liked drink redan är liked och lägger den till arrayn av likedDrinks samt sparar i local storage
      let alreadyLiked = false
      for (let i = 0; i < this.likedDrinks.length; i++)
        if (this.likedDrinks[i].idDrink === drink.idDrink) {
          alreadyLiked = true
          break;
        }

      if (!alreadyLiked) {
        this.likedDrinks.push(drink)
        localStorage.setItem('likedDrinks', JSON.stringify(this.likedDrinks))
        console.log("added", drink, " to liked drinks")
      }
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
  margin-top: 60px;
}
</style>
