/*  'new' keyword */

// used with user-defined classes (i.e. new Set(), new Map(), etc)

// 1) creates an empty object & then sets: this = {}
// 2) automatically links/binds function's prototype (as parent object)
//    with 'this' (child) object (& sets '__proto__ = prototype')
// 3) returns a pointer to 'this' object

/* Recall:
    traditional functions have their own 'this' pointer which points
    to an associated object (a.k.a. memory-space)
*/


// continued & improved example from previous '82.js' file:

function CreateUser(firstName, lastName, email, age, address){ // constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
};

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function (){
    return this.age >= 18; 
};
CreateUser.prototype.sing = function (){
    return "la la la la ";
};

const user1 = new CreateUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address"),
      user2 = new CreateUser('ali', 'moaiz', 'm.ali@gmail.com', 19, "bla bla blue"),
      user3 = new CreateUser('faisal', 'malik', 'fMalik@gmail.com', 17, "ponka");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());

console.log('__proto__:', user1.__proto__);
console.log('prototype:',CreateUser.prototype);
// here: __proto__ === [[prototype]] === prototype


/* JS Convention:
   - start the variable name with capital letter and use camelCase
    
   - used to distinguish a user-defined class object, 
     so that a user can use new keyword with it
  
   - examples: new Set(), new Map(), etc
*/