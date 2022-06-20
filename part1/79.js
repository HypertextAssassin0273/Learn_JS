/* linking/bonding objects with Object.create() (intro to inheritance) */

// as in previous '78.js' file, we got rid of memory leaks for createUser(),
// but still, the code is tideous & less managable,
// since we have to set references in 'createUser' (child) object 
// to the functions of 'userMethods' (parent/base) object additionally

// we can use Object.create() to link the 'userMethods' to 'createUser' obj
// this allows 'child' object to inherit all properties of 'parent' object
// this technique is also known as 'prototype-chaining'


const userMethods = {
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18(){
        return this.age >= 18;
    },
    sing(){
        return 'toon na na na la la ';
    }
};

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods); //same as 'empty' object: {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
};

const user1 = createUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address"),
      user2 = createUser('ali', 'moaiz', 'm.ali@gmail.com', 19, "blabla blue"),
      user3 = createUser('faisal', 'malik', 'fMalik@gmail.com', 17, "ponka");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());


// 'base/parent' object properties can be viewed/extracted from '__proto__' of 'child'
console.log(user1.__proto__);
// note: __proto__ === [[prototype]] !== prototype