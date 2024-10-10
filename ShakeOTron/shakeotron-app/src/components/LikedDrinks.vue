<template>
  <ul>
    <li v-for="drink in drinks" :key="drink.id">
      {{ drink.strDrink }}
      <img :src="drink.strDrinkThumb" alt="Drink image" @click="getThisDrink(drink.idDrink), likeDrink(drink)">
    </li>
  </ul>

</template>


<script>
export default {
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