/* optional chaining */

// used to avoid getting error
// usually used for nested objects
// specially useful in react (when managing states)

// checks whether object's property exists or not
// if yes then returns the value
// otherwise it returns undefined


let user;

// console.log(user.firstName); // error
console.log(user?.firstName); // undefined


// for checking nested object property:
const user2  = {
    firstName: "shahzaib",
    // address: {houseNumber: '1234'}
};

// console.log(user2.address.houseNumber); // error
console.log(user2?.address?.houseNumber); // undefined