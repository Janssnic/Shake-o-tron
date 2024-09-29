let drinksOfType = [];

function apiResponse(alcType) {
  //alcType = "Vodka"
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcType

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const drinks = data.drinks;
      if (drinks && drinks.length > 0) {
        drinks.forEach(element => {
          const id = element.idDrink
          const name = element.strDrink
          const pic = element.strDrinkThumb
          matrixGen(id, name, pic)
        });
      }
      console.log(exportDrinks());
    })
}

function matrixGen(id, name, pic) {
  const oneDrinkArray = [id, name, pic];
  drinksOfType.push(oneDrinkArray);
}

function exportDrinks() {
  const formattedDrinks = drinksOfType.map(drink => ({
    id: drink[0],
    name: drink[1],
    pic: drink[2]
  }));
  return formattedDrinks;
}

export { apiResponse, exportDrinks };