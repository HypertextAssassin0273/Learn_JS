/* array destructuring */

const myArray = ["value1", "value2", "value3", "value4", "val5"];

// using rest parameter with spread syntax
let [myvar1, myvar2, ...rest] = myArray;

console.log(`value of myvar1: ${myvar1}`);
console.log(`value of myvar2: ${myvar2}`);
console.log(rest);

// extracting nth_index value
let {[3]: nthval} = myArray;
console.log("value of nthval: ", nthval);

// can be used for swapping variables:
var a, b;
[a, b] = ["Male", "Female"];
[a, b] = [b, a];
console.log(a, b); //Output: Female, Male


//for more info:
//https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/