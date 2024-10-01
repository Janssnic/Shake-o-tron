<template>
    <div>
      <input type="text" v-model="searchQuery" @keyup.enter="searchDrinks">
    </div>
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        {{ drink.strDrink }}
        <img :src="drink.strDrinkThumb" alt="Drink image" @click="getThisDrink(drink.idDrink)">
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
      }
  }
}

</script>