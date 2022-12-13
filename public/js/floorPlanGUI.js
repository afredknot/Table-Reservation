

// const position = { x: 0, y: 0, scale: 0 }

// interact('.draggable').draggable({
//   listeners: {
//     start (event) {
//       console.log(event.type, event.target)
//     },
//     move (event) {
//       position.x += event.dx
//       position.y += event.dy

//       event.target.style.transform =
//         `translate(${position.x}px, ${position.y}px)`
//     }},
//   modifiers: [
//     interact.modifiers.restrict({
//       restriction: 'parent'
//     })
//   ]
// })

// // ---------------------


// const zoomable = document.querySelector(".draggable");
// let zoom = 1;
// const speed = 0.15;

// document.addEventListener("wheel", (e) => {
//   if (e.deltaY > 0) {
//     zoomable.style.transform = `scale(${(zoom += speed)})`;
//   } else {
//     zoomable.style.transform = `scale(${(zoom -= speed)})`;
//   }
// });


// ----------------



// let tables = document.querySelector("#svg5")

// tables.addEventListener("click", (e) => {
//   modal.style.display = "block";
//   console.log(e.target.id)
  
  
// });
