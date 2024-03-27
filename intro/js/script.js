const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   let bgClass; 
//   if( i % 2 === 0) {
//     console.log("pari");
//     bgClass = "even";
//   } else {
//     console.log("dispari");
//     bgClass = "odd";
//   }
// 
//   const boxElem = `<div class="box ${bgClass}">${i}</div>`; // string
//   rowElem.innerHTML += boxElem;
// }
 
// Creiamo i box direttamente conìme elemnti HTML

for (let i = 0; i <= 10; i++) {
  console.log(i);
  let bgClass; 
  if( i % 2 === 0) {
    console.log("pari");
    bgClass = "even";
  } else {
    console.log("dispari");
    bgClass = "odd";
  }

  const boxElem = document.createElement("div"); // object
  boxElem.innerHTML = i;
  boxElem.classList.add("box");
  boxElem.classList.add(bgClass);
  console.log(boxElem);

  boxElem.addEventListener("click", function() {
    alert(`Ciao sono numero ${i} e sono ${bgClass}`);
  });
  // per inserire l'elemento nell'elemento genitore in pagina 
  rowElem.append(boxElem);
}