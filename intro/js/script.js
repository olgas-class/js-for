// 1. Scrivo i numeri da 1 a 10
// console.log(1);
// console.log(2);
// console.log(3);
// // ...
// console.log(10);

// Parti da 1
// stampa il numero
// incremeta il numero
// Se il numero è minore o uguale a 10
// riparti dall'inizios

// Scrivizmolo con il ciclo for
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Operatore di incremento
// let i = 0;
// i = i + 1; ---> i++;
// let i = 1;
// console.log(i++); // --> 1
// console.log(i); // --> 2

// console.log(++i); // --> 2
// console.log(i); // --->2

// let a = 10;
// let b = 5;
// const c = b + a++;
// console.log(c); // ---> 15
// console.log(a); // --> 11
// ++i;

// Chiedere all'utente di inserire un numero fino a quale vuole contare
// const userNumber = parseInt(prompt("Fino a che numero vuoi contare?")); // number | NaN
//
// for(let i = 1; i <= userNumber; i++) {
//   // scope di blocco
//   console.log(i);
// }

//
// for(let i = 0; i < 15; i++) {
//   console.log(i);
// }

// Ciclando sui numeri da 1 a 15 stampare solo quelli pari
// for (let i = 1; i <= 15; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// Stampare numeri da 10 a 0 
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// Calcolare la somma di tutti i numeri da 1 a 10
// let sum = 0; // 10 
// for (let i = 1; i <= 4; i++) {
//   console.log(i); // 
//   sum = sum + i; // 
//   console.log('somma', sum);
// }

// Stampare 100 numeri negli li nella lista
const resultListElem = document.getElementById("result-list"); // object | null
console.log(resultListElem);
for(let i = 1; i <= 100; i++) {
  // Test
  // console.log(i);
  // creo li con il numero
  const itemElem = `<li>numero: ${i}</li>`;
  console.log(itemElem);
  // resultListElem.innerHTML = resultListElem.innerHTML + itemElem;
  resultListElem.innerHTML += itemElem;
}