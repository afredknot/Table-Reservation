let selectedTable = 0;
const errorEl = document.querySelector("#errorText");
const confirmEl = document.querySelector("#confirmText")
// Get the modal
const modal = document.getElementById("myModal");
const modalForm = document.getElementById("modal-form");
const reserveMessage = document.getElementById("reservedMessage");
const tableNumber =document.getElementById("table-number")
const tableQuantity = document.getElementById('table-quantity')
let title = document.getElementById('restaurant-name')


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


var slider = document.getElementById("myRange");
var output = document.getElementById("customer_id");
output.innerHTML = slider.value; 

// arrays to be filled with data from fetch calls below
let diningTableResos = []
let restaurantDiningTables =[]

const submitReso = document.getElementById('submit')

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

slider.oninput = function() {
  output.innerHTML = this.value;
}

let tables = document.querySelector("#svg")
let restaurant = document.querySelector('.restaurant')
let restaurantID = restaurant.id;

// make the reservation for tomorrow
const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)
const year = tomorrow.getFullYear()
const month = tomorrow.getMonth()+1
const date = tomorrow.getDate()

// Post new reservation
const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('/api/reservations/', {
    method: 'POST',
    body: JSON.stringify({ 
    restaurant_id: restaurantID,
    dining_table_id: selectedTable,
    num_guests: Number(slider.value),
    date_time: `${year}-${month}-${date} 19:00:00`
  }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status == 200) {
    modal.style.display = "none";
    confirmEl.innerHTML =`Hurray! Your reservation was created!`;
    
   setTimeout(() => {
    return document.location.reload();
  }, 2000);
    
  } else {
    errorEl.innerHTML = `Error: There was no reservation placed.`
  }
}

const getRestaurantInfo = () => {
  fetch(`/api/restaurants/${restaurantID}/data`, {
      method: "GET",
  })

  .then(function (response) {
    return response.json();
  })
  
  .then(function (Data) {
    // append list of tables with existing reservations
    title.textContent = Data.name

    for (i=0; i<Data.reservations.length; i++){
        diningTableResos.push(Data.reservations[i].dining_table_id)
    };
    
    // append list of all dining tables with data 
    for (i=0; i<Data.dining_tables.length; i++){
        restaurantDiningTables.push(Data.dining_tables[i])
    };

    // target the id and update color
    for (i=0; i<diningTableResos.length; i++){    
        const tableReserved = document.getElementById(`${diningTableResos[i]}`)
        tableReserved.classList.toggle('red')
    };

  });
};

getRestaurantInfo()

submitReso.addEventListener("click", handleSubmit)

// When the user clicks on a table, open the modal
tables.addEventListener("click", (e) => {
  
  // if already reserved, display reserved message modal
  if (e.target.classList.contains('red')) {
    modal.style.display = "block";
    
    for (i=0; i<restaurantDiningTables.length; i++){ 
      if (Number(e.target.id) === restaurantDiningTables[i].dining_table_id){
      tableNumber.textContent = `Table #${restaurantDiningTables[i].restaurant_table_ref}`
      }
    }
    reserveMessage.setAttribute('style', 'display: block')
    modalForm.setAttribute('style', 'display: none')

  // if element selected is a table, open reservation modal
  } else if (e.target.id <= 60 ){  
    
      // dynamically update slider max to table capacity
      for (i=0; i<restaurantDiningTables.length; i++){ 
        if (Number(e.target.id) === restaurantDiningTables[i].dining_table_id){
          slider.setAttribute('max', restaurantDiningTables[i].num_seats)
          tableNumber.textContent = `Table #${restaurantDiningTables[i].restaurant_table_ref}`
          tableQuantity.textContent = `This table has a maximum seating capacity of ${restaurantDiningTables[i].num_seats}`
        };
    
    output.innerHTML = slider.value
    slider.setAttribute('value', this.value)
    modal.style.display = "block";
    selectedTable = Number(e.target.id);
    reserveMessage.setAttribute('style', 'display: none')
    modalForm.setAttribute('style', 'display: block')
    };  
  };
});