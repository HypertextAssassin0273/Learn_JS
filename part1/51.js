/* default parameters */

// function addTwoNum(a, b){
//     return typeof b === "undefined" ? a : a + b;
// }

// function addTwoNum(a, b = 0){
//     return a + b;
// }

const addTwoNum = (a, b = 0) =>  a + b; // cleaner approach

console.log(addTwoNum(4, 8));
console.log(addTwoNum(4));
console.log(addTwoNum());