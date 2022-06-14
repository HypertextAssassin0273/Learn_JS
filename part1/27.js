/* array push pop unshift shift operations */

let fruits = ["apple", "mango", "grapes"];
console.log(fruits);

// push 
fruits.push("banana");
console.log(fruits);

// pop 
let poppedFruit = fruits.pop();
console.log(fruits);
console.log("popped fruits is", poppedFruit);

// unshift 
fruits.unshift("banana");
fruits.unshift("myfruit");
console.log(fruits);

// shift 
let removedFruit = fruits.shift();
console.log(fruits);
console.log("removed fruits is ", removedFruit);

//Note: array in JS is similar std::vector in C++, but with more methods
/*Signature for analyzation:
    shift, unshift methods have O(N) & push pop have O(1) time complexity
*/