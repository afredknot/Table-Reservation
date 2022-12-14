const reserveBtn = document.querySelector("#reserveBtn");
const restaurant = document.querySelector('.restaurant');
const restaurantID = restaurant.id


let diningTableResos = []
let restaurantDiningTables =[]

const getRestaurantInfo = () => {
fetch(`/api/restaurants/${restaurantID}/data`, {
    method: "GET",
})

.then(function (response) {
    return response.json();
  })
  
.then(function (Data) {
    // console.log(Data.dining_tables)

 
    for (i=0; i<Data.reservations.length; i++){
        diningTableResos.push(Data.reservations[i].dining_table_id)
    }

    for (i=0; i<Data.dining_tables.length; i++){
        restaurantDiningTables.push(Data.dining_tables[i])
    }

    console.log(diningTableResos)
    console.log(restaurantDiningTables)
    for (i=0; i<diningTableResos.length; i++){
        // todo: target the id and update color
    }

    for (i=0; i<restaurantDiningTables.length; i++){
        // todo: target the id and pass through to modal
    }
})

console.log(diningTableResos)
console.log(restaurantDiningTables)

// .then((response) => {
//     document.location.replace(`/api/restaurants/reserve/${restaurantID}`)
// })
}


getRestaurantInfo()
// reserveBtn.addEventListener("click", getRestaurantInfo);
