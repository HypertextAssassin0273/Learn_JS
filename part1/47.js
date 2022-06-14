/* intro to hoisting */

Hello();

function Hello(){
    console.log("hello world");
}
// function defined with only traditional-style can be called before its declaration
// this behaviour is called hoisting


console.log(hello);

var hello = "hello world"; // undefined
// let hello = "hello world"; // gives reference error
// const hello = "hello world"; // gives reference error