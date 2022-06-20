/* Intro to object methods */

// (traditional) functions inside object


function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
};

const person1 = {
    firstName : "shah",
    age: 28,
    about: personInfo
},
person2 = {
    firstName : "bilal",
    age: 18,
    about: personInfo
},
person3 = {
    firstName : "gohar",
    age: 17,
    about: personInfo,
    fullName: function(lastName){ console.log('full name:', this.firstName, lastName); }
};

person1.about();
person2.about();
person3.about();

person3.fullName('rizvi');