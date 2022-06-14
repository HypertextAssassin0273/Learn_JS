/* filter method */

const numbers = [1, 3, 2, 6, 4, 8];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(oddNumbers);