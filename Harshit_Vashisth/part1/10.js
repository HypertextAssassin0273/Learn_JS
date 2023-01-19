/* template string */

let age = 23, firstName = "shahzaib"

//req. string: "my name is shahzaib and my age is 23"

//tedious format (string concatenation)
let aboutMe = "my name is " + firstName + " and my age is " + age; 

//easy & beautifies the format (template string)
aboutMe = `my name is ${firstName} and my age is ${age}`
// just simply put variables in place-holders ${}

console.log(aboutMe);