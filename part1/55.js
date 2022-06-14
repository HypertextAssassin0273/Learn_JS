/* function returning function */

function myFunc(){
    function hello(){
        return "hello world"
    }

    return hello;
}

// const ans = myFunc();
// console.log(ans());

console.log(myFunc()()); // cleaner approach


// this technique is also called 'higher order functions' (technical-jargon)
// very powerful technique & is widely used in asynchronous-JS
// similar can be achieved in C++ for building complex modules