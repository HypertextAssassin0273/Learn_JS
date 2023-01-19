/* hoisting in function declarations */

console.log(this);
console.log(window);

console.log(myFunction); // prints myFunction's definition
// myFunction(); // same as: window.myFunction()

console.log(fullName);

function myFunction(){
    console.log("this is my function");
}
// here, myFunction() will be stored in 'stack' memory 
// inside 'window' object (of G.E.C)

var firstName = "Shahzaib";
var lastName = "Khan";
var fullName = firstName + " " + lastName;
console.log(fullName);


// 'var' variables are stored in a special object (as key-value pairs)
// a.k.a global environment record (in ES docs)