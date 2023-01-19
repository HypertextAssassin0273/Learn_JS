/* how to clone array & concatenate two arrays */

let array1 = ["item1", "item2"];

// let arrar2 = array1; // shallow-copy/same-array-pointed-in-heap
// let arrar2 = [].concat(array1);// copy-construction/cloning/deep-copy

// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);
// let array2 = [...array1, "item3", "item4"];// spread operator (new way)

let oneMoreArray = ["item3", "item4"],
    array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1);
console.log(array2);