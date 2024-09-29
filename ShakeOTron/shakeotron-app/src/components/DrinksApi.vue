<template>
    <ul>
      <li v-for="drink in drinks" :key="drink.id">
        {{ drink.name }} ({{ drink.id }})
        <img :src="drink.pic" alt="Drink image">
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drinks: exportDrinks()
      }
    }
  }
  </script>