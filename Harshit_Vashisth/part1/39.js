/* computed properties */

let key1 = "objkey1",
    key2 = "objkey2";

let value1 = "myvalue1",
    value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

const obj = {};
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);

