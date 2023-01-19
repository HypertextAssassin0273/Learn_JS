/* prototype usage */

// continued & improved example from previous '79.js' file

// we no longer need to define additional 'userMethods' object
// as we can link the function's own prototype (as parent object)
// to the 'user' (child) object

// this means, it also sets '__proto__ = prototype' for 'user' [see: line 42, 43]

// now, for any 'user', whatever property or method we add through prototype, 
// it will get included without any memory leaks

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
};

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function (){
    return this.age >= 18; 
};
createUser.prototype.sing = function (){
    return "la la la la ";
};

const user1 = createUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address"),
      user2 = createUser('ali', 'moaiz', 'm.ali@gmail.com', 19, "bla bla blue"),
      user3 = createUser('faisal', 'malik', 'fMalik@gmail.com', 17, "ponka");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());

console.log('__proto__:', user1.__proto__);
console.log('prototype:',createUser.prototype);
// here: __proto__ === [[prototype]] === prototype

//tip: compare '79.js' & this file's 'console.log' results for better understanding 