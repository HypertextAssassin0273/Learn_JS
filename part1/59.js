/* reduce method */
// returns the accumulated result

const numbers = [1, 2, 3, 4, 5, 10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

const sum = numbers.reduce((total, num) => total + num);

console.log(sum);

// accumulator (total),  currentValue (num),  return 
//      1                       2               3 
//      3                       3               6
//      6                       4               10
//      10                      5               15
//      15                      10              25


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "television", price: 15000},
];

// const totalAmount = userCart.reduce((total, currentProduct) => {
//     return total + currentProduct.price;
// }, 0);

const totalAmount = userCart.reduce((total, {price}) => total + price, 0);
// Since we don't want the whole object as accumulator (i.e. total),
// hence 'total' is initialized with '0' value as number type.
// Rememeber, when 2nd parameter isn't passed in reduce method, it declares & also
// initializes the accumulator with zeroth-index-element's type & value from array

console.log(totalAmount);

// accumulator (total), currentValue (price),  return 
//     0                   12000               12000
//     12000               22000               34000
//     34000               15000               49000