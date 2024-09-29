//hello
let drinksOfType = [];

export function apiResponse(alcType){
    alcType = "Vodka"
    //add someway to change this varible to accepted alchol base for drink
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcType

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            const drinks = data.drinks;
            if (drinks && drinks.length > 0) {
                drinks.forEach(element => {
                    const id = element.idDrink
                    const name = element.strDrink
                    const pic = element.strDrinkThumb
                    //console.log(element)

                    matrixGen(id, name, pic)
                });
            }
        }
    )
}

export function matrixGen(id, name, pic){
    const oneDrinkArray = [id, name, pic];
    drinksOfType.push(oneDrinkArray);
}

export function showMatrix(){
    apiResponse()
    setTimeout(() => {
        //console.log(drinksOfType)
        exportDrinks()
    }, 2000)
}

export function exportDrinks() {
    const formattedDrinks = drinksOfType.map(drink => ({
        name: drink[1],
        pic: drink[2]
    }));
    //console.log(formattedDrinks);
    return formattedDrinks;
}

export { drinksOfType as drinks };
//take pictures and name from this and show on page when youve chosen alchol base