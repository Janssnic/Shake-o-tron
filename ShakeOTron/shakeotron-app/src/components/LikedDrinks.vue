<template>
  <div>
    <h2>Liked drinks!</h2>
  <ul>
    <li v-for="drink in likedDrinks" :key="drink.idDrink">
      {{ drink.strDrink }}
      <img :src="drink.strDrinkThumb" alt="Drink image" @click="getThisDrink(drink.idDrink), likeDrink(drink)">
      <Button icon="pi pi-times" severity="danger" aria-label="Cancel" @click="removeDrink(drink)"> Remove</Button>
    </li>
  </ul>
</div>
</template>


<script>
export default {
  data() {
    return {
      drinks: [],
      likedDrinks: [],
      testedDrinks: [],
      searchQuery: "",
      selectedDrinkId: null,
      SpecDrink: []
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
    //modified av nicos kod, props to him!
    async getData(alcType) {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcType
      try {
        let response = await fetch(url)
        let data = await response.json()
        this.drinks = data.drinks
      }
      catch (error) {
        console.log(error);
      }
    },
    searchDrinks() {
      if (this.searchQuery.trim()) {
        this.getData(this.searchQuery);
      }
    },
    async getThisDrink(idDrink) {
      const DrinkIdUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink
      try {
        let response = await fetch(DrinkIdUrl)
        let data = await response.json()
        this.SpecDrink = data.drinks
        this.selectedDrinkId = idDrink
      }
      catch (error) {
        console.log(error)
      }
    },






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
  },

  


}


</script>