<template>
    <div>
      <input type="text" v-model="searchQuery" @keyup.enter="searchDrinks">
    </div>
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        {{ drink.strDrink }}
        <img :src="drink.strDrinkThumb" alt="Drink image" @click="getThisDrink(drink.idDrink)">
        <div class="drinkInfo">
          <ul>
            <li v-for="info in SpecDrink" :key="info.id">
              <span>{{ info }}</span>
            </li>
          </ul>
        </div>
        <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" @click="likeDrink(drink)">Like</Button>
        <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" @click="testDrink(drink)">Test</Button>
      </li>
    </ul>
    
</template>
  
<script>
export default {
  data() {
    return {
      drinks: [],
      searchQuery: '',
      SpecDrink: []
    };
  },
  emits: ['likedDrink', 'testedDrink'],


  methods: {
    async getData(alcType){
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcType
      try {
        let response = await fetch(url)
        let data = await response.json()
        this.drinks = data.drinks
        //console.log(this.drinks)
      }
      catch (error) {
          console.log(error);
        }
      },
      searchDrinks() {
        this.getData(this.searchQuery)
      },
      async getThisDrink(idDrink) {
        const DrinkIdUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink
        //console.log(DrinkIdUrl)
        try {
          let response = await fetch(DrinkIdUrl)
          let data = await response.json()
          this.SpecDrink = data.drinks
          console.log(data)
        } 
        catch (error) {
          console.log(error)
        }

      },
      likeDrink(drink) {
        //console.log(drink, "has been liked")
        this.$emit('likedDrink', drink)
      },
      testDrink(drink) {
        //console.log(drink, "has been liked")
        this.$emit('testedDrink', drink)
      }
  }
}

</script>

<style scoped>



</style>