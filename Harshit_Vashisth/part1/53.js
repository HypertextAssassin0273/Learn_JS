/* param destructuring */

// used for object, especially in react 

const person = {
    firstName: "harshit",
    gender: "male",
    age: 500
}

// function printDetails(obj){
//     console.log(obj.firstName,
//                 obj. gender,
//                 obj.age);
// }

function printDetails({firstName, gender, age}){
    console.log(firstName,
                gender,
                age);
}

printDetails(person);