/* function declaration */

function singHappyBirthday(){
    console.log("happy birthday to you ......");
}
singHappyBirthday();

function sumThreeNumbers(number1, number2, number3){
    return number1 + number2 + number3;
}
console.log(sumThreeNumbers(1,2,3))

// isEven
// input : 1 number 
// output : true , false 

function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(4));

// function 
// input : string , req. character position
// output: nth tCharacter 

function firstChar(anyString, n){
    return anyString[n-1];
}
console.log(firstChar("abcdefgh", 3));

// function 
// input : array, target (number)
// output: index of target if target present in array 

function findTarget(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([1, 3, 8, 90, 67, 44], 67));