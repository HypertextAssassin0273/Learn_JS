/* Intro to Window (Global) Object */

// "use strict";
// restricts the use of 'this' object/keyword

console.log(window);

function myFunc(){    
    // console.log(this);
    console.log('hello!!!!!');
};

// myFunc();
window.myFunc();


// every variable/function etc stored in global scope becomes the part of 'window' object