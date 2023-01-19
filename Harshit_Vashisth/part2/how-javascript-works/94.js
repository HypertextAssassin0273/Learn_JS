/* hoisting in function expressions */

console.log(myFunction); // undefined

var myFunction = function(){
    console.log("this is my function");
};
// here, myFunction (i.e. pointer) is stored in 'stack' 
// inside window object (as 'var' is used), 
// but the pointed function will be stored in 'heap'

console.log(myFunction); // prints myFunction's definition