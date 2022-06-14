/* rest parameters */

function myFunc(a,b,...c){
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    console.log(`c : ${c}`);
    // console.log(`c :`, c);
}

myFunc(3, 4, 5, 6, 7, 8, 9);


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

console.log(addAll(4, 5, 4, 2, 10));


// similar to variadic arguments in C++11