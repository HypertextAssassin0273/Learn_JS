/* spread operator (continued) */

// revision:
// const array1 = [1, 2, 3],
//       array2 = [5, 6, 7];

// spread other arrays in newArray
// const newArray = [...array1, ...array2, 89, 69];

// spread string in newArray
// const newArray = [..."123456789"];

// console.log(newArray);


// spread operator in objects:
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

// spread other objects in newObj
const newObject = { ...obj2, ...obj1, key69: "value69" };

// spread array in newObj
// const newObject = { ...["item1", "item2"] };

// spread string in newObj
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };

console.log(newObject);