/* some method */
// Determines whether is there any single element of an array that satisfies the given condition or not

const numbers = [3, 5, 11, 9];

let result = numbers.some(num =>num % 2 === 0);
// is there any single no. in the array which is even no.

console.log(result);

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 122000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
];

result = userCart.some(cartItem => cartItem.price > 100000);
// is there any product in the cart whose price is greater than 100k

console.log(result);