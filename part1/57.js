/* map method */

const numbers = [3, 4, 6, 1, 8];

// const square = function(num){
//     return num * num;
// }
// const squareNumbers = numbers.map(square);

const squareNumbers = numbers.map( num => num * num); //same as above method

console.log(squareNumbers);


const users = [
    {firstName: "hamza", age: 23},
    {firstName: "ahmed", age: 21},
    {firstName: "maaz", age: 22},
    {firstName: "ali", age: 20},
];

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// const userNames = users.map(user => user.firstName);

const userNames = users.map(({firstName : fn}) => fn); //same as above 2 methods

console.log(userNames);