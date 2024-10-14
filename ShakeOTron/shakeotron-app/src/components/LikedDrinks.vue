<template>

  <SelectButton class="selectButton" :options="viewOptions" v-model="selectedView" optionLabel="label"
    optionValue="value"></SelectButton>
  <div v-if='selectedView === "liked"' class="drinksList">
    <h2>Liked drinks!</h2>
    <div class="my-drinks">
    <ul>
      <li v-for="drink in likedDrinks" :key="drink.idDrink">
        <div class="drink-name">
          <h3>{{ drink.strDrink }}</h3>
        </div>
        <img :src="drink.strDrinkThumb" alt="Drink image" @click="getRecipe(drink.idDrink)">
        <div v-if="chosenDrink === drink.idDrink">
          <div class="drinkData">
            <ul>
              <li v-for="data in SpecDrink" :key="data" >
                <span class="instructions"><b>Instructions: </b>{{ data.strInstructions }}</span> <br>
                <span><b>Glass: </b>{{ data.strGlass }}</span><br>
                
                <span><b>Ingredients: </b> <br></span>
                <span v-if="data.strIngredient1">{{ data.strIngredient1 }} {{ data.strMeasure1 }}<br></span>
                <span v-if="data.strIngredient2">{{ data.strIngredient2 }} {{ data.strMeasure2 }}<br></span>
                <span v-if="data.strIngredient3">{{ data.strIngredient3 }} {{ data.strMeasure3 }}<br></span>
                <span v-if="data.strIngredient4">{{ data.strIngredient4 }} {{ data.strMeasure4 }}<br></span>
                <span v-if="data.strIngredient5">{{ data.strIngredient5 }} {{ data.strMeasure5 }}<br></span>
                <span v-if="data.strIngredient8">{{ data.strIngredient8 }} {{ data.strMeasure8 }}<br></span>
                <span v-if="data.strIngredient9">{{ data.strIngredient9 }} {{ data.strMeasure9 }}<br></span>
                <span v-if="data.strIngredient10">{{ data.strIngredient10 }} {{ data.strMeasure10 }}<br></span>
                <span v-if="data.strIngredient11">{{ data.strIngredient11 }} {{ data.strMeasure11 }}<br></span>
                <span v-if="data.strIngredient12">{{ data.strIngredient12 }} {{ data.strMeasure12 }}<br></span>
                <span v-if="data.strIngredient13">{{ data.strIngredient13 }} {{ data.strMeasure13 }}<br></span>
                <span v-if="data.strIngredient14">{{ data.strIngredient14 }} {{ data.strMeasure14 }}<br></span>
                <span v-if="data.strIngredient15">{{ data.strIngredient15 }} {{ data.strMeasure15 }}<br></span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <PrimeButton class="red-button" label="Dislike" severity="danger" aria-label="Cancel" @click="removeDrink(drink)"></PrimeButton>
        </div>
      </li>
    </ul>
  </div>
  </div>

  <div v-if='selectedView === "tested"'>
    <h2>Tested drinks!</h2>
    <ul>
      <li v-for="drink in testedDrinks" :key="drink.idDrink">
        <div class="drink-name">
          <h3>{{ drink.strDrink }}</h3>
        </div>
        <img :src="drink.strDrinkThumb" alt="Drink image" @click="getRecipe(drink.idDrink)">
        <div v-if="chosenDrink === drink.idDrink">
          <div class="drinkData">
            <ul>
              <li v-for="data in SpecDrink" :key="data" >
                <span class="instructions"><b>Instructions: </b>{{ data.strInstructions }}</span> <br>
                <span><b>Glass: </b>{{ data.strGlass }}</span><br>
                
                <span><b>Ingredients: </b> <br></span>
                <span v-if="data.strIngredient1">{{ data.strIngredient1 }} {{ data.strMeasure1 }}<br></span>
                <span v-if="data.strIngredient2">{{ data.strIngredient2 }} {{ data.strMeasure2 }}<br></span>
                <span v-if="data.strIngredient3">{{ data.strIngredient3 }} {{ data.strMeasure3 }}<br></span>
                <span v-if="data.strIngredient4">{{ data.strIngredient4 }} {{ data.strMeasure4 }}<br></span>
                <span v-if="data.strIngredient5">{{ data.strIngredient5 }} {{ data.strMeasure5 }}<br></span>
                <span v-if="data.strIngredient8">{{ data.strIngredient8 }} {{ data.strMeasure8 }}<br></span>
                <span v-if="data.strIngredient9">{{ data.strIngredient9 }} {{ data.strMeasure9 }}<br></span>
                <span v-if="data.strIngredient10">{{ data.strIngredient10 }} {{ data.strMeasure10 }}<br></span>
                <span v-if="data.strIngredient11">{{ data.strIngredient11 }} {{ data.strMeasure11 }}<br></span>
                <span v-if="data.strIngredient12">{{ data.strIngredient12 }} {{ data.strMeasure12 }}<br></span>
                <span v-if="data.strIngredient13">{{ data.strIngredient13 }} {{ data.strMeasure13 }}<br></span>
                <span v-if="data.strIngredient14">{{ data.strIngredient14 }} {{ data.strMeasure14 }}<br></span>
                <span v-if="data.strIngredient15">{{ data.strIngredient15 }} {{ data.strMeasure15 }}<br></span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <PrimeButton class="green-button" label="Like" severity="success" aria-label="Cancel" @click="addLikedDrink(drink)"></PrimeButton>
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
      likedDrinks: [],
      testedDrinks: [],
      searchQuery: "",
      chosenDrink: null,
      SpecDrink: [],



      viewOptions: [
        { label: "Liked drinks", value: "liked" },
        { label: "Tested drinks", value: "tested" }
      ],

      selectedView: "liked",
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
    async getRecipe(idDrink) {
      const DrinkIdUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + idDrink
      try {
        let response = await fetch(DrinkIdUrl)
        let data = await response.json()
        this.SpecDrink = data.drinks
        this.chosenDrink = idDrink
        console.log("dirnk clicked")
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
    removeDrink(removedDrink) {
      this.likedDrinks = this.likedDrinks.filter(drink => drink.idDrink !== removedDrink.idDrink) //checkar varje drink om id:n matchar och deletar ifall det är samma
      localStorage.setItem('likedDrinks', JSON.stringify(this.likedDrinks))
      console.log("deleted", removedDrink, " from liked drinks")
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

<style scoped>
.selectButton {
  padding: 15px;
  padding-bottom: 0px;
  margin-top: 21.44px;
}

.drink-name {
  padding: 20px;
  padding-bottom: 0px;
}


</style>