/* clone using Object.assign */

const obj1 = {
    key1: "value1",
    key2: "value2"
};

// old method:
// const obj2 = Object.assign({'key69': "value69", 
//                             'key73': "value73"}, 
//                              obj1);

// new method:
const obj2 = {'key69': "value69",
              'key73': "value73",
               ...obj1};


obj1.key3 = "value3";
// doesn't reflect-changes/add in obj2

console.log('obj1:', obj1);
console.log('obj2:', obj2);