/* hasOwnProperty() usage */

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

const user1 = new CreateUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address");

for(let key in user1){
    // console.log(key); // M#1: prints all keys

    // if(!user1.hasOwnProperty(key)){ // M#2: prints only 'this' keys
    //     console.log(key);
    // }

    if(user1.hasOwnProperty(key)){ // M#3: prints only 'prototype' keys
        console.log(key);
    }
}


/* Conclusion: 
    In this way, we can seperate/distinguish properties from methods (or vice-versa)
    of a (user-defined) class object when iterating in loop
*/