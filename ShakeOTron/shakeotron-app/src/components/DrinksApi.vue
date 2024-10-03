<template>
    <div>
      <input type="text" v-model="searchQuery" @keyup.enter="searchDrinks">
    </div>
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        {{ drink.strDrink }}
        <img :src="drink.strDrinkThumb" alt="Drink image" @click="getThisDrink(drink.idDrink)">
        <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" @click="getThisDrink(drink.idDrink), likeDrink(drink)">Like</Button>
        <Button icon="pi pi-heart" severity="help" rounded aria-label="Favorite" @click="getThisDrink(drink.idDrink), testDrink(drink)">Test</Button>
      </li>
    </ul>
</template>
  
<script>
export default {
  data() {
    return {
      drinks: [],
      searchQuery: '',
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
      getThisDrink(idDrink) {
        console.log(idDrink)
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