/* shorter syntax for object methods */

// const user1 = {
//     firstName : "shahzaib",
//     age: 22,
//     about: function(){ console.log(this.firstName, this.age); }   
// };

const user1 = {
    firstName : "shahzaib",
    age: 22,
    about(){ console.log(this.firstName, this.age); }   
};

user1.about();