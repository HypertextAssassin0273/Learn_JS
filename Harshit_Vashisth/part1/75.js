/* arrow functions inside object */

// arrow functions don't hold 'this' pointer to their associated object

const user1 = {
    firstName : "hamza",
    age: 18,
    about: () => { console.log(this.firstName, this.age); }   
};
// here, this will refer to global window object
// in which 'firstName' & 'age' are undefined (i.e. don't exist yet)

user1.about(user1);