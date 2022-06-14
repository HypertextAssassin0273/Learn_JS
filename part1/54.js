/* callback functions */

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback, callback_param){
    console.log("hello there I am a func and I can..")
    callback(callback_param);
}

myFunc(myFunc2, "shahzaib");


// similar to passing functions inside another function 
// using function-pointer as parameter in C & C++