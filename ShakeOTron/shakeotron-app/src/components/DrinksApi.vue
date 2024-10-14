<template>
  <div>
    <input class="input-box" type="text" v-model="searchQuery" @keyup.enter="searchDrinks">
  </div>
  <div class="drinkContainer">
  <ul>
    <li v-for="drink in drinks" :key="drink.idDrink">
      <!-- {{ drink.strDrink }} -->
      <img :src="drink.strDrinkThumb" alt="Drink image" @click="getThisDrink(drink.idDrink)" class="drinkImage">
      <div>
      <PrimeButton label="Like" severity="success" @click="likeDrink(drink)"></PrimeButton>
      <PrimeButton label="Test" severity="help"  @click="testDrink(drink)"></PrimeButton>
    </div>
      <div class="drinkInfo" v-if="selectedDrinkId === drink.idDrink">
        <ul>
          <li v-for="(info, index) in SpecDrink" :key="index" class='aDrink'>
            <span><b>Name: </b>{{ info.strDrink }}</span>
            <br>
            <span><b>Glass: </b>{{ info.strGlass }}</span>
            <br>
            <span><b>Instructions: </b>{{ info.strInstructions }}</span>
            <br>
            <span><b>Ingredients: </b></span>
            <br>
            <span v-if="info.strIngredient1">{{ info.strIngredient1}} {{ info.strMeasure1 }} <br></span>
            <span v-if="info.strIngredient2">{{ info.strIngredient2}} {{ info.strMeasure2 }} <br></span>
            <span v-if="info.strIngredient3">{{ info.strIngredient3}} {{ info.strMeasure3 }} <br></span>
            <span v-if="info.strIngredient4">{{ info.strIngredient4}} {{ info.strMeasure4 }} <br></span>
            <span v-if="info.strIngredient5">{{ info.strIngredient5}} {{ info.strMeasure5 }} <br></span>
            <span v-if="info.strIngredient6">{{ info.strIngredient6}} {{ info.strMeasure6 }} <br></span>
            <span v-if="info.strIngredient7">{{ info.strIngredient7}} {{ info.strMeasure7 }} <br></span>
            <span v-if="info.strIngredient8">{{ info.strIngredient8}} {{ info.strMeasure8 }} <br></span>
            <span v-if="info.strIngredient9">{{ info.strIngredient9}} {{ info.strMeasure9 }} <br></span>
            <span v-if="info.strIngredient10">{{ info.strIngredient10}} {{ info.strMeasure10 }} <br></span>
            <span v-if="info.strIngredient11">{{ info.strIngredient11}} {{ info.strMeasure11 }} <br></span>
            <span v-if="info.strIngredient12">{{ info.strIngredient12}} {{ info.strMeasure12 }} <br></span>
            <span v-if="info.strIngredient13">{{ info.strIngredient13}} {{ info.strMeasure13 }} <br></span>
            <span v-if="info.strIngredient14">{{ info.strIngredient14}} {{ info.strMeasure14 }} <br></span>
            <span v-if="info.strIngredient15">{{ info.strIngredient15}} {{ info.strMeasure15 }} <br></span>
            
          </li>
        </ul>
      </div>
    
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      drinks: [],
      searchQuery: '',
      SpecDrink: [],
      selectedDrinkId: null, 
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
    likeDrink(drink) {
      this.$emit('likedDrink', drink)
    },
    testDrink(drink) {
      this.$emit('testedDrink', drink)
    }
  }
}
</script>

<style scoped>
div input {
  margin: 0;
}
.drinkContainer{
  display: flex;
  justify-content: center;
  height: 100vh;
}
ul {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  width: fit-content;
}
.drinkImage{
  width: 30vw;
  height: auto;
  
}
.drinkInfo{
  text-align: left;
  width: fit-content;
  max-width: 30vw;
}


</style>
