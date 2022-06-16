/* sort method */

// works perfectly for strings (since it works on ascii value in lexicographical-order),
// but not for numbers, so we need to pass an additional callback
// comparator (i.e. function that performs comparison).
// comparator works on +ve or -ve, instead of true or false.
// case-sensitive


const userNames = ['shahzaib', 'ahmed', 'ali', 'Bilal', 'adam', 'murtaza', 'Hamid'];

// ascending (default):
// userNames.sort();

// descending:
// userNames.sort((a, b) => (a > b ? -1 : 1));

// case-insensitive & ascending:
// userNames.sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));

// case-insensitive & descending:
userNames.sort((a, b) => b.localeCompare(a, undefined, {sensitivity: 'base'}));

console.log(userNames);


const numbers = [5, 9, 1200, 410, 3000];

// numbers.sort(); // gives wrong result

// expected-result: [5, 9, 400, 1200, 3000]
// actual-result:   [1200, 3000, 410, 5, 9]
 
// why? : it reads all numbers as strings: 
// ["5", "9", "1200", "410", "3000"] => 1st-letter-ascii-conversion: [53, 57, 49, 52, 51] (before)
// ["1200", "3000", "410", "5", "9"] => 1st-letter-ascii-conversion: [49, 51, 52, 53, 57] (after)

// correct methods:
// numbers.sort((a, b) => a - b); // ascending

numbers.sort((a, b) => b - a); // descending

// how it works?:
// if (a - b) is postive (greater than 0) then, swap them as: a, b => b, a
// if (a - b) is negative (less than 0) then, they will remain same: a, b => a, b

// a, b => 1200, 410 
// a - b => 790 (postive)
// b, a => 410 , 1200

// a, b => 5, 9 
// a - b => 790 (negative)
// a, b => 5, 9

console.log(numbers);


// real-world examples:
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

//here, product isn't mutated: 
// const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price); //method#1
const lowToHigh = [...products].sort((a, b) => a.price - b.price); //method#2

const highToLow = [...products].sort((a, b) => b.price - a.price);

console.log('products: ', products, '\nhighToLow: ',highToLow);


// const users = [
//     {firstName: "shahzaib", age: 23},
//     {firstName: "ahmed", age: 21},
//     {firstName: "hatif", age: 22},
//     {firstName: "talha", age: 20},
// ]

// users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);

// console.log(users);