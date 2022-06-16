/* fill method */
// format:  (value , start , end)
// add or updates values in array with some new value (of same type)

//usage 1:
const myArray = new Array(10).fill(0);
console.log(myArray);

//usage 2:
const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
myArray2.fill(0, 2, 5);
console.log(myArray2);