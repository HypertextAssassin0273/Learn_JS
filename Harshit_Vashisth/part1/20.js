/* while loop */

let i = 0; // 1 2 3 4

while(i<=9){
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`);

/* while loop example (SUM OF NATURAL NO.S) */

let num = 100;

// M#1
// let total = 0; //1 + 2 +3
// let i = 0;
// while(i<=100){
//     total = total + i;
//     i++;
// }
// console.log(total);

// M#2 (efficient approach & faster)
let total = (num*(num+1))/2;
console.log(total);