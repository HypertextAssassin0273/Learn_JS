/* booleans (true, false) & comparison operator */

let num1 = 7, num2 = "9";

console.log(num1 < num2);

// == vs ===
console.log(num1 === num2);

// != vs !==
console.log(num1 !== num2);

// '=='or '!=' checks value only, not restricted for data-types
// '===' or '!==' checks value & also data-type, safer to use

/*Tip: 
    better to explicitly type-cast to same types while using other comparison operators
    especially when you also want to check/restrict data-types.
    i.e. comparsion b/w number and strings 'normalNum < number(stringNum)'
*/