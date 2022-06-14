/* use const for creating array & Object.freeze usage */

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
// here const only restricts object assignment
// but data values can be still changed, means its still mutable
// i.e. similar to const pointer assignment in c++

fruits.push("banana");
console.log(fruits);

//we can use Object.freeze() to make objects immutable
Object.freeze(fruits);
// fruits.push("banana"); //gives error

//once freeze, there is no way to undo or unfreeze it
//only way to is make a clone of immutable/freeze object
const mutableFruits = [...fruits];

mutableFruits.push("peach", "strawberry");
console.log(mutableFruits);

/*Note:
    the starting letter of Objects & reference type name is always capital letter
    as per JS convetion.
*/