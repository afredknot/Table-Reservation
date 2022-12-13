
const homeBtn = document.getElementById('homeBtn')
const profileBtn = document.getElementById('profileBtn')
const reservationBtn = document.getElementById('reservationBtn')

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

if (window.location.pathname == '/'){
  homeBtn.classList.add('hidden')
}

// if (window.location.pathname == '/api/users/profile'){
//   profileBtn.classList.add('hidden')
// }

// if (window.location.pathname == '/api/users/profile/reservations'){
//   reservationBtn.classList.add('hidden')
// }