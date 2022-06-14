/* arrow & inline functions */

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

const singHappyBirthday = () => {
    console.log("happy birthday to you ......");
}

singHappyBirthday();


// const sumThreeNumbers = function(num1, num2, num3) { // traditional
//     return num1 + num2 + num3;
// }

// const sumThreeNumbers = (num1, num2, num3) => { // arrow (general)
//     return num1 + num2 + num3;
// }

const sumThreeNumbers = (num1, num2, num3) => num1 + num2 + num3; // inline function
// only works when there is single line return statement present in function body

console.log(sumThreeNumbers(2,3,4));


// const isEven = function(num){
//     return num % 2 === 0;
// }

const isEven = num => num % 2 === 0;

console.log(isEven(4));


// const firstChar = function(anyString){
//     return anyString[0];
// }

const firstChar = anyString => anyString[0];

console.log(firstChar("ali"));


const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(findTarget([11,22,33], 22));