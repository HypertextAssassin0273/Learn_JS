/* hoisting in 'let' & 'const' variables */

/* NOTE:
    run each case at a time, while comment out the other cases,
    in order to see the respective error in console
*/

// 1) Uncaught ReferenceError: 'firstName' is not defined
console.log(firstName);
// here, 'lastName' is not even 'defined' in global memory


// 2) Uncaught ReferenceError: Cannot access 'firstName' before initialization
console.log(lastName);
// here, 'lastName' is 'defined' in global memory,
// but not 'initialized' yet
// this variable is said to be in 'T.D.Z' (temporal dead zone)

let lastName = 'hohoho';
console.log(lastName);


// same applies for 'const', but it cannot be un-initialized:
// const name;
// Uncaught SyntaxError: Missing initializer in const declaration


// 'typeof' behavior:
console.log(typeof name2);
// let name2 = "shahzaib"; // uncomment to observe different error