/* linking/bonding objects with Object.create() (intro to inheritance) */

// as in previous '78.js' file, we got rid of memory leaks for createUser()
// but still, the code is tideous & less managable
// since we have to additionally set references to the methods of
// 'userMethods' object in createUser() for 'user' object

// we can use Object.create() to link the 'userMethods' to 'user' object
// this allows the child object to inherit all properties of parent object
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
    const user = Object.create(userMethods); //returns the clone of prototype object
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
console.log('__proto__:', user1.__proto__);
console.log('prototype:',createUser.prototype);
// here: __proto__ === [[prototype]] !== prototype