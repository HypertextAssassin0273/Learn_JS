
/* function that creates object */

// similar to object constructor

// 1) adds key value pairs as properties
// 2) returns object with along-with added properties 


function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;

    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    };
    user.is18 =  function(){
        return this.age >= 18;
    };
    return user;
};

const user1 = createUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address");

console.log(user1);

console.log(user1.about());
console.log(user1.is18());