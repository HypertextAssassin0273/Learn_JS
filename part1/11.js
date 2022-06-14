/* undefined, null, BigInt data-types */
// 1)
console.log('Undefined:-');

let firstName;
console.log(typeof firstName);

firstName = "Shahzaib";
console.log(firstName, typeof firstName);

// 2)
console.log('\nNull:-');

let myVariable = null;
console.log(myVariable);

myVariable = "Shahzaib";
console.log(myVariable, typeof myVariable);

console.log(typeof null); 
// bug/error in JS/ES6, prints object instead of null

// 3)
console.log('\nBigInt:-');

let myNumber = BigInt(12); //M#1: BigInt ctor
myNumber = 12n;            //M#2: 'n' explicit format

console.log(myNumber, `limit: ${Number.MAX_SAFE_INTEGER}`);// check limit

let sameMyNumber = 123;
// console.log(myNumber + sameMyNumber); // gives error
console.log(myNumber + BigInt(sameMyNumber)); // req. explicit typecasting to match types