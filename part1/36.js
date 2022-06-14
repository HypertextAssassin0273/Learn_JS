/* Intro to Objects */

// objects are reference type
// objects store key value pairs
// objects don't have index

// how to create objects:
// const person = {name:"shahzaib",age:22};
const person = {
    name: "shahzaib",
    age: 22,
    hobbies: ["coding", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects:
console.log(`${person["name"]}\n${person["age"]}\n${person.hobbies}`);

// how to add key value pair to objects:
// person.gender = "male"; // method#1
person["gender"] = "male"; // method#2
// console.log(person);


/* are objects really reference types? */
console.log('testing objects:-');

const person2 = person;// shallow-copy/same-object-pointed-in-heap
console.log('before:\n', person, person2);

person.age = 44;

console.log('after changing person_1.age:\n', person, person2);

person2.name = "ali";

console.log('after changing person_2.name:\n', person, person2);
// this concludes that objects are also reference types & created on heap
// because when property-values of one object is changed,
// it also affects/reflects-in the 2nd (referenced) object