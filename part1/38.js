/* how to iterate object */

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["coding", "sleeping", "listening music"]
}

// there are 2 ways:
// 1) for in loop 
// 2) Object.keys 

console.log('\nMethod 1:-');
for(let key in person){
    // console.log(`${key} : ${person[key]}`);
    console.log(key," : " ,person[key]);
}

console.log('\nMethod 2:-');
for(let key of Object.keys(person)){
    console.log(person[key]);
}
// Object.keys return array of keys in strings

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);