/* class keyword */

// 2015 / es6
// classes are fake 
// internally, they are converted into same syntax as '83.js' file

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){ return `${this.firstName} is ${this.age} years old.`; }
    is18(){ return this.age >= 18; }
    sing(){ return "la la la la "; }
    takeValue(val = 'N.i.l'){ console.log(val); }
}

const user1 = new CreateUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address"),
      user2 = new CreateUser('ali', 'moaiz', 'm.ali@gmail.com', 19, "bla bla blue"),
      user3 = new CreateUser('faisal', 'malik', 'fMalik@gmail.com', 17, "ponka");

console.log(user1);
console.log(user1.about());
console.log(user3.sing());

// user1.takeValue('error: 404!');

// console.log('__proto__:', user1.__proto__);
// console.log('prototype:',CreateUser.prototype);