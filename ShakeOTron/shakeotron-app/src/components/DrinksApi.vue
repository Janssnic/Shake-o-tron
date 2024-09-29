<template>
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        {{ drink.name }} ({{ drink.id }})
        <img :src="drink.pic" alt="Drink image">
      </li>
    </ul>
</template>
  
  <script>
  import { apiResponse, exportDrinks } from '../../../Scripts/ApiDrink';
  
  
  export default {
    data() {
      return {
        drinks: []
      }
    },
    mounted() {
      apiResponse('Vodka').then(() => {
        this.drinks = exportDrinks();
      });
    }
  }
  </script>