/* every method */
// Determines whether all elements of an array satisfy the given condition or not

const numbers = [2, 4, 6, 8, 10];

let result = numbers.every(num => num % 2 === 0);
// are all no.s in array are even?

console.log(result);


const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
];

result = userCart.every(cartItem => cartItem.price < 30000);
// are all products in the cart have price less than 30k?

console.log(result);