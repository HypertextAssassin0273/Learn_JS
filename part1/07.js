/* Useful String Member-Functions/Methods */ 

// trim() : removes whitespace from both sides of a string
let firstName = "   Shahzaib   ";

let tempString = 'Trim:-\nBefore:' + firstName + ' (' + firstName.length + ')\n';

firstName = firstName.trim(); // 'Shahzaib'
// String class is immutable
// any method-operation won't affect the original data
// but instead it reflects on returned clone copy

tempString += 'After:' + firstName + ' (' + firstName.length + ')';
// '+=' concatenates instead of overwriting unlike '=' operator

console.log(tempString);

// toUpperCase() : converts a string completely to uppercase letters
console.log('toUpperCase:-\n' + firstName.toUpperCase());

// toLowerCase() : converts a string completely to lowercase letters
console.log('toLowerCase:-\n' + firstName.toLowerCase());

// slice() : extracts a part of a string
console.log('slice:-\n' + firstName.slice(1)     /* 'hahzaib' */
                 + '\n' + firstName.slice(1,4)); // 'hah'

// reference link for more methods:
// https://www.w3schools.com/jsref/jsref_obj_string.asp