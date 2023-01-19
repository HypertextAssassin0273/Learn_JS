/* String Indexing */ 

let fullName = "Shahzaib Khan";
//  S  h  a  h  z  a  i  b     K  h  a  n 
//  0  1  2  3  4  5  6  7  8  9  10 11 12

// console.log(firstName[0]);

// use 'member variable 'length' of 'string' class to get length of string:
console.log('name size: ', fullName.length);

console.log('letter at index ', (fullName.length - 4) + ': ', fullName[fullName.length - 4]);

// to find last index, we can use: length - 1