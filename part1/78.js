/* store methods in different object */

// as in previous '77.js' file, whenever createUser() was called,
// methods were created seperately for each user,
// resulting in memory-leak, which is un-efficient for a data of million users

// in order to avoid this, we store methods in seperate object &
// then reference them in the other objects (that contain properties)


const userMethods = {
    about: function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function(){
        return this.age >= 18;
    }
};
//note: 'userMethods' shouldn't be cloned in order to avoid data redundancy in memory

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
};

const user1 = createUser('shahzaib', 'khan', '1234@gmail.com', 22, "my address"),
      user2 = createUser('ali', 'moaiz', 'm.ali@gmail.com', 19, "bla bla blue"),
      user3 = createUser('faisal', 'malik', 'fMalik@gmail.com', 17, "ponka");

console.log(user1);
console.log(user1.about());
console.log(user3.about());