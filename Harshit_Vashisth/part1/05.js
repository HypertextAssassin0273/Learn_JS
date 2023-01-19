/* Declare Constants */

const pi = 3.14;

// pi = 123;
// gives error if value is changed

console.log('value of pi: ' + pi);
// here, '+' is used to 'concatenate' strings
// now, value of pi is part of above 'lvalue/temporary' string like this: 'value of pi: 3.14'
// and this string is then passed as parameter inside member function 'log' of 'console' class