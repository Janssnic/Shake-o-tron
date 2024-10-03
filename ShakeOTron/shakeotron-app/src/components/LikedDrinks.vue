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
  props: {
    likedDrinks: Array
  }
}
</script>