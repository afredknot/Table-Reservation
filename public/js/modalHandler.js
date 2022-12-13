let selectedTable = 0;
const errorEl = document.querySelector("#errorText");
const confirmEl = document.querySelector("#confirmText")
// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var slider = document.getElementById("myRange");
var output = document.getElementById("customer_id");
output.innerHTML = slider.value; 
// / Display the default slider value
// When the user clicks on the button, open the modal

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

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
slider.oninput = function() {
  output.innerHTML = this.value;
}
// Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }


// When the user clicks on the button, open the modal
let tables = document.querySelector("#svg")
let restaurant = document.querySelector('.restaurant')
let restaurantID = restaurant.id;


tables.addEventListener("click", (e) => {
  if (Number(e.target.id) <=15 ){
    modal.style.display = "block";
    selectedTable = Number(e.target.id);
  }
});


const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch('/api/reservations/', {
    method: 'POST',
    body: JSON.stringify({ 
    restaurant_id: restaurantID,
    dining_table_id: selectedTable,
    num_guests: Number(slider.value),
    date_time: '2022-12-15' 
  }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.status == 200) {
   confirmEl.innerHTML =`Hurray! Your reservation was created!`;
    return document.location.reload();
  } else {
    errorEl.innerHTML = `Error: There was no reservation placed.`
  }
}

submitReso.addEventListener("click", handleSubmit)

