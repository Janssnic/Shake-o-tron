<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <DrinksApi @likedDrink="addLikedDrink" @testedDrink="addTestedDrink"></DrinksApi>
  <Navigation name="" />
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
      likedDrinks: [],
      testedDrinks: []
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

    const storedTested = localStorage.getItem("testedDrinks")
    if (storedTested) {
      this.testedDrinks = JSON.parse(storedTested)
    }
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
  margin-top: 60px;
  padding: 0px;
}
</style>
