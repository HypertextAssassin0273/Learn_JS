/* typeof operator & data-types*/

// Primitive Data-Types:-
// string: "harhit"
// number: 2, 4, 5.6 
// booleans: false (0), true (1)
// undefined: not-defined-yet
// null: 0 OR \0
// BigInt: used-for-storing-very-large-no.s
// Symbol

let age = 22, firstName = "hamza";
console.log(age + " -> " + typeof age + ', ' + firstName + " -> " + typeof firstName);

// convert number to string (i.e. 22 -> "22")
//M#1: using String class overloaded operator
age = age + "";
//M#2: using String class overloaded ctor
age = String(age);
console.log(age + " -> " + typeof age);

// convert string to number (i.e. "22" -> 22)
//M#1: using Number class overloaded operator
let errorNo = +"404";
//M#2: using Number class overloaded ctor
errorNo = Number("404");
console.log(errorNo + " -> " + typeof errorNo);