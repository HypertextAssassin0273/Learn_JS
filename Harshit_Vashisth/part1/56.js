/* important array methods (forEach method) */
// it cannot mutate the original array, provided that 
// if elements of array are not updated manually inside it
// (i.e. by using self-referenced variable)

 const numbers = [4, 2, 5, 8];

// function myFunc(number, index){ // prints number & its index
//     console.log(`index is ${index} number is ${number}`);
// }
// numbers.forEach(myFunc);

numbers.forEach(function(number,index){ // same as above
    console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function(number, index){ // multiplies by 3
    console.log(`${index} : ${number * 3}`);
})


const users = [
    {firstName: "hamza", age: 23},
    {firstName: "ahmed", age: 21},
    {firstName: "maaz", age: 22},
    {firstName: "ali", age: 20},
];

// users.forEach(function(user){
//     console.log(user.firstName);
// });
users.forEach(user => {
    console.log(user.firstName);
})

// for(let user of users){ // same as above
//     console.log(user.firstName);
// }
for(let {firstName} of users){
    console.log(firstName);
}

users.forEach(({firstName}, index) => { // same as above, but with index (clean right?)
    console.log(`${firstName} (${index})`);
})