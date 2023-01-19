/* warning about storing object-method's reference */

const user1 = {
    firstName : "shahzaib",
    age: 22,
    about: function(){ console.log(this.firstName, this.age); }   
};

user1.about();


// don't do this mistake:
const myFunc = user1.about;
// only stores/references-to 'about' method,
// doesn't store 'this' w.r.t associated object.
// means 'this' now refers to (global) window object
// [see: '72.js' file, or un-comment line no: 19 to observe changes]

// var firstName = 'mani'; // global variable 
// here: this.firstName = window.firstName = firstName

myFunc();


// correct method (i.e. use bind):
const myFunc2 = user1.about.bind(user1);
myFunc2();