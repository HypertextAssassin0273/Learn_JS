var x = 5,
    y = 6,
    z = x + y,
    z = "5";
if (x === z) {
    // alt + shift + a = comment or uncomment
    console.log("true");
} else {
    console.log("false");
}

/* type conversion tricks */
// number to a string
const val = 1 + "";
console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"

// string to a number
let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int); // Result: "number"
