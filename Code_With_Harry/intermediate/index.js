/* Ways to print in JavaScript (basic): */
// console.log("Hello World");
// // alert("me");
// document.write("this is document write"); //should be avoided (due to security reasons)

/* Javascript console API: */
// console.log("Hello World", 4 + 6, "Another log");
// console.warn("this is warning");
// console.error("This is an error");
// console.assert(4 == 189, "4 is not equal to 189");

/* JavaScript Variables: */
// What are Variables? - Containers to store data values

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

/* Data types in JavaScript: */
/* Numbers */
// var num1 = 455;
// var num2 = 56.76;

/* String */
// var str1 = "This is a string";
// var str2 = 'This is also a string';

/* Objects */
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.977
// };
// console.log(marks);

/* Booleans */
// var a = true, b = false;
// console.log(a, b);

// var und = undefined;
// var und; //both are same
// console.log(und);

// var n = null;
// console.log(n);

// var arr = [1, 2, "bablu", 4, 5];
// console.log(arr);
// console.log(arr[1]);

/* Summary: At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays, Objects, etc
*/

/* Operators in JavaScript: */
/* Arithmetic Operators */
// var a = 100, b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

/* Assignment Operators */
// var c = b;
// c += 2;
// c -= 2; // c = c - 2;
// c *= 2;
// c /= 2;
// console.log(c);

/* Comparison Operators */
// var x = 34, y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

/* Logical Operators */
// console.log(true && true) // Logical and
// console.log(true || false) // Logical or
// console.log(!false); // Logical not

/* Function in JavaScript: */
// function avg(a, b) {
//     return (a + b) / 2;
// }
// c1 = avg(4, 6), c2 = avg(14, 16); // global scope variables
// console.log(c1, c2);

/* Conditionals in JavaScript: */
// var age = 41;
/* Single if statement */
// if(age > 18){
//     console.log('You can drink rasna water');
// }

/* if - else statement */
// if(age > 18)
//     console.log('You can drink rasna water');
// else
//     console.log('You cannot drink rasna water');

/* if - else statement (as tenary operator) */
// console.log(`You ${age > 18?'can':'cannot'} drink rasna water`);// using template literals

/* if-else Ladder (as tenary operator)  */
// age = 25;
// console.log(
//     age > 32 ? "You are not a kid": // if
//     age > 26 ? "Bachhe nahi rahe":  // else if
//     age > 22 ? "Yes Bachhe nahi rahe": // else if
//     age > 18 ? "18 Bachhe nahi rahe": // else if
//     "Bachhe rahe" // else
// );
// console.log("End of ladder");

/* Loops in JavaScript: */
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// for(range of arr){
//     console.log(range);
// }

// arr.forEach(function(element){
//     console.log(element);
// });

// arr.forEach(elem => console.log(elem*elem)); // using arrow function

// const ac = 0; // let vs var vs const
// ac++; // ac = ac +1;

// let j = 0; // we'll use let from now on
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

/* Array Methods in JavaScript: */
// let myArr = ["Fan", "Camera", 34, null, true];

// myArr.pop();
// myArr.push("harry");
// myArr.shift();

// console.log(myArr.unshift("Harry"));// returns the new length of the array
// console.log(myArr);
// console.log(myArr.toString()); // converts array to string

// let d = [1, 4, 6, 43, 23, 32324, 2];
// d.sort(); // sorts by default in alphabetical order

// d.sort((a, b) => a - b); // possible fix: pass a comparator function
/* Note: a - b is ascending order & b - a is descending order */

// console.log(d);

/* String Methods in JavaScript: */
// let str = "Harry is a very good good boy Harry";
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.lastIndexOf("good")); // useful when there are multiple occurences of the same word

// console.log(str.slice(str.length-5, str.length)); // returns a part of the string
// let d = str.replace("Harry", "Rohan");
// d = d.replace("good", "bad"); // replaces only the first occurence
// console.log(d,'\n', str);

/* Date Methods in JavaScript: */
// let myDate = new Date(); // new keyword is used to create a new object
// console.log(myDate);
// console.log(myDate.getTime()); // returns the time in milliseconds
// console.log(myDate.getFullYear());
// console.log(myDate.getDay()); // returns the day of the week
// console.log(myDate.getMinutes());
// console.log(myDate.getHours()); // returns the hour in 24 hour format
 
/* DOM (Document Object Model) Manipulation: */
// let elem = document.getElementById('click');
// console.log(elem);

// let elemClass = document.getElementsByClassName("container"); 
/* note: type 'gtebc' to quickly write this method, you can do the same for other methods 
         too by typing first letter of each word and then pressing tab */
// console.log(elemClass);

// // elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary"); // comment out the above line for effect
// elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText); // irt -> innerText
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// let tn = document.getElementsByTagName('div');
// console.log(tn);

// let createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// tn[0].removeChild(createdElement2);// removes an element
/* Note: use 'mdn' website to find out more about the methods */ 

/* Selecting using Query: */
// sel = document.querySelector('.container'); // returns the first element with the same class name
// console.log(sel);
// sel = document.querySelectorAll('.container'); // returns a list of all the elements with the same class name
// console.log(sel);

/* Events in JavaScript: */
// function clicked(){
//     console.log('The button was clicked');
// }
// window.onload = function(){ // useful when you want to add something to the page after it has been loaded
//     console.log('The document was loaded');
// }

// c1.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("Clicked on Container");
// });

// c1.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");
// });

// c1.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// });

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// c1.addEventListener('mouseup', function(){ // triggered when the mouse is released after clicking
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// });

// c1.addEventListener('mousedown', function(){ // triggered when the mouse is pressed and held down
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>";
//     console.log("Mouse down when clicked on Container");
// });

/* Arrow Functions: */
// function sum1(a, b){ return a+b; } // normal function (for two parameters)
// const sum2 = (a, b) => { return a+b; } // arrow function
// const sum3 = (a, b) => a+b; // simplified arrow function

// const sum4 = a => a+5; // simplified arrow function for single parameter
// const sum5 = () => 5; // simplified arrow function for no parameter with return
// const sum6 = (a, b) => { console.log(a+b); } // simplified arrow function for no return

// SetTimeout and setinterval: */
// const logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>";
//     console.log("I am your log");
// };

// clr = setTimeout(logKaro, 5000); // useful for scheduling tasks after a certain time
// clr = setInterval(logKaro, 2000); // schedules tasks after a certain time repeatedly
/* Note: use clearInterval(clr) or clearTimeout(clr) to cancel setInterval/setTimeout */

/* JavaScript localStorage: */
// localStorage.setItem('name', 'shazaib');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();
/* Note: don't use localStorage for storing sensitive data as it can be accessed by anyone */

/* JSON (JavaScript Object Notation): */
/* Note: JSON is a data format that is used to store and transport data.
         It's often used when data is sent from a server to a web page. */

// obj = {name: "harry", length: 1, a: {this: 'that'}};
// JsonString = JSON.stringify(obj);
// console.log(JsonString);

// console.log(typeof obj, typeof JsonString);

// parsed = JSON.parse(JsonString);
// console.log(parsed);

/* Template literals (Backticks): */
// a = 34;
// console.log(`this is my ${a}`);
