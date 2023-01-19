/* Sets (container/data-structure) */

// store data  
// iterable
// can hold data of different types
// no index-based access 
// order is not guaranteed
// unique items only (no duplicates allowed),
// but values within the item object can be same in set
// implemented as hash-maps


const numbers = new Set([111, 222]);
// will store elements of array, instead of array itself

// const numbers = new Set(); // empty set

//string can also be passed to get set of characters:
// const characters = new Set("yolo"); 

numbers.add(1);
numbers.add(2);
// values are stored in insertion-order

numbers.add(3).add(4);
// chaining possible, since return type is self object

numbers.add([5, 6]);
numbers.add([5, 6]); // will add, because address is different

const items = ['item1', 'item2', 'item3'];
numbers.add(items);
numbers.add(items); // won't add, because address is same

// if you want to pass values instead of array, then you'll have to
// to add each individual element from array at a time
items.forEach(item => numbers.add(item));

console.log('size:', numbers.size); 
// gives total no. of elements

console.log(numbers);


// checks value faster than in array (bcz of hash-map structure)
let str = numbers.has(1) ? "1 is present" : "1 is not present";
// console.log('result:', str);


// iterable through loop:
console.log('present elements:-');
// for(const number of numbers){
//     console.log(number);
// }

// same above can be achieve with forEach in set:
// numbers.forEach(number => console.log(number));


// Set has no keys, so this method makes Sets compatible with Maps
// as it returns an iterator for accessing each value in Set
// as key-value pairs (in form of arrays)
console.log('pairs of number set:-');
// for(const pair of numbers.entries()){
//     console.log(pair);
// }


// mathematical set operations:
const mySet1 = new Set([1, 2, 3, 4]),
      mySet2 = new Set([1, 3, 5, 7]);

const union = new Set([...mySet1, ...mySet2]);
// console.log('union: ', union);

const intersection = new Set([...mySet1].filter(val => mySet2.has(val)));
// console.log('intersection: ', intersection);

const difference = new Set([...mySet1].filter(val => !mySet2.has(val)));
// console.log('difference: ', difference);


// use-case (when u want to get unique values):
const ids = [1, 2, 2, 5, 4, 7 , 4];
const uniqueIds = new Set(ids);
// console.log('uniqueIds:', uniqueIds);


/* reference links for additional info:
   1) https://www.notion.so/JavaScript-Sets-78e65b865ab747f79828e442f25653da

   2) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
      > must check 'examples' section

   3) https://www.geeksforgeeks.org/sets-in-javascript/
   
   4) https://www.w3schools.com/js/js_object_sets.asp
*/