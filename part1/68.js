/* Maps (container/data-structure) */

// map is an iterable
// stores data in ordered fashion (i.e. order guaranteed)
// stores key-value pair (like array-object)
// duplicate keys are not allowed like objects

// difference between maps and objects:
// objects can only have string or symbol as key
// but, in maps you can use anything as key
// like array, number, string 


// OBJECT: (recall)
// normal object is referred as object-literal
// key -> string, key -> symbol

// const person = {
//     firstName : "shahzaib",
//     age: 22,
//     1 : "one",
//     .43 : "0.43"
// };

// person.email = "shazaibahmed0000@gmail.com";
// person['email'] = "shazaibahmed0000@gmail.com";

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);

// for(let key in person){
//     console.log(key,":" , typeof key);
// }
// for of loop -> not possible


// MAP:
const person = new Map();

person.set('firstName', 'shahzaib');
person.set('age', 22);
person.set(1, 'one');
person.set([1, 2, 3], 'onetwothree');
person.set({1: 'one'},'ONE');
person.set('func', val => console.log(val));

console.log(person);

// console.log(person.get(1));
// person.get('func')('holy moly! I stored function inside map!');


// transform Map into Array:
// console.log(Array.from(person));    //M#1: 2D key-value array
// console.log([...person]);           //M#2: 2D key-value array
// console.log([...person.keys()]);    //M#3: 1D key array
// console.log([...person.values()]);  //M#4: 1D value array


// 'for of' loop possible:
console.log('person map keys:-');
// for(let key of person.keys()){
//     console.log(key, ':', typeof key);
// }

console.log('person map values:-');
// for(let value of person.values()){            //M#1
//     console.log(value);
// }
// person.forEach(value => console.log(value));  //M#2


// use-case#1:
console.log('string => array mapping:-');

const numbers = new Map([["whole numbers", [1 ,2 ,3 ,4]],
                         ["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]],
                         ["negative numbers", [-1, -2, -3, -4]]]);

// console.log(numbers);


// use-case#2:
console.log('array => array mapping:-');

const nameInfo = ["first name", "last name"],
      friends = ["friend 1", "friend 2"];

const personInfo = new Map([[nameInfo, ["shahzaib", "khan"]],
                      [friends, ["ali","hamid"]]]);
 
// console.log(personInfo);
let nameIndex = 0, friendIndex = 1;
// console.log(`${nameInfo[nameIndex]}:`, personInfo.get(nameInfo)[nameIndex]);
// console.log(`${friends[friendIndex]}:`, personInfo.get(friends)[friendIndex]);


// use-case#3:
console.log('object => object mapping:-');

const person1 = {
    id: 1,
    firstName: "shahzaib"
},
person2 = {
    id: 2,
    firstName: "aisha"
};

const extraInfo = new Map();
extraInfo.set(person1, {age: 22, gender: "male"});
extraInfo.set(person2, {age: 18, gender: "female"});

// console.log(extraInfo);
// console.log(extraInfo.get(person1).age);
// console.log(`Person with Id ${person2.id} has ${extraInfo.get(person2).gender} gender`);


// use-case#4:
console.log('set of objects => object mapping:-');

const personDB = [
    {name : 'hamza', age: 18},
    {name : 'aqil', age: 22},
    {name : 'jahanzaib', age: 23},
    {name : 'umair', age: 18},
    {name : 'laiba', age: 25},
    {name : 'usaid', age: 17},
    {name : 'zain', age: 19}
];
// console.log(personDB);

const GroupInfo = new Map([
    [new Set([personDB[4], personDB[5]]), 
        {name: 'noobs', rating: 3.1}],
    [new Set([personDB[0], personDB[1]]),
        {name: 'falcons', rating: 4.3}],
    [new Set([personDB[2]]),
        {name: 'nerds', rating: 2.9}]
]);
// console.log(GroupInfo);

personDB[1].age = 404; // reflects inside Map (shallow copy)

let personIndex = 1,
    Result = GroupInfo.get([...GroupInfo.keys()].find(groupSet => groupSet.has(personDB[personIndex]))).name;

// console.log(`'${personDB[personIndex].name}' belongs to`,
//             `'${Result}' group`);


/* reference link for additional info:
   1) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
      > must check 'examples' section
   
   2) https://www.w3schools.com/js/js_object_maps.asp
*/