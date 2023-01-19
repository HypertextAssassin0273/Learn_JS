/* understanding what is prototype */

function hello(){ console.log("hello world"); };
// javascript function behavior => function + object

// name property => tells function name:
console.log(hello.name);

// function provides more useful properties:
// such as call, apply, bind, etc [see: '73.js' file]

// you can add your own properties to it:
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// prototype => special property:
console.log('hello.prototype (initially):\n', hello.prototype);
// you can assume it returns an object {} 
// that initially has only one method (i.e. constructor)

// allows us to add properties & more methods within/inside itself:
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){ return "lalala"; };

console.log('hello.prototype (afterwards):\n', hello.prototype);
// console.log(hello.prototype.abc, hello.prototype.sing());

// only functions provide prototype property:
const hello2 = {}; //also: [], Map(), Set()
console.log(`prototype is${(hello2.prototype)?'':' not'} present in hello2 (object-literal)`);


/* Conclusion:
    In JS, when you define a function (in traditional style),
    it means that you have actually created a (dynamic) class 
    that only contains a constructor.
    
    This class-like-function can later-on add properties &
    methods dynamically through prototype-property
    (a.k.a. associated object or memory-space).
*/