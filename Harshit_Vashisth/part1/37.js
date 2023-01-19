/* difference between dot and bracket notation */

const person = {
    name: "shahzaib",
    age: 22,
    "person hobbies": ["coding", "sleeping", "listening music"]

}

// console.log(person."person hobbies"); // dot-notation (gives error)
console.log(person["person hobbies"]); // bracket-notation

let key = "email";
person[key] = "shazaibahmed0000@gmail.com";

console.log(person);

/*Tips: 
    1) don't use spaces when specifying property name
       (i.e. use camel-case or snake-case)
    2) use braket notation when properties are dynamically added
       (i.e. taking property names as input from users etc) 
*/