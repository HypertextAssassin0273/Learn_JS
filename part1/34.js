/* iterate array using for of loop & for in loop */

const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

// traditional/general method:
// for(let i = 0; i<fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// for in loop: (same as traditional-method, but much cleaner)
// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }

// for of loop: (iterate elements directly)
for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}

console.log(fruits2);