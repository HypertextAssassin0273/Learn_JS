/* more about prototype */

let numbers = [1, 2, 3, 4, 5];
// arrays are also objects in JS

console.log(Array.prototype); // [constructor: ƒ, …] => array type 
console.log(numbers.__proto__);
console.log(Object.getPrototypeOf(numbers)); // same as: numbers.__proto__

console.log(numbers);


function hello(){
    console.log("hello");
}

console.log(hello.prototype); // {constructor: ƒ} => object type 

// prototype can be changed too:
hello.prototype = [];

console.log(hello.prototype.constructor);
console.log(hello.prototype);

// hello.prototype.push(1, 2, 3);
// console.log(hello.prototype);