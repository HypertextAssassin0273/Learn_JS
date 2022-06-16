/* find method */
// returns first occurence of element where given condition (predicate) is true

const myArray = ["Hello", "cat", "dog", "lion"];

const ans = myArray.find( str => str.length <= 3);
// is there any string present in myArray with length 3 or less?

console.log(ans);

// real-world example:
const users = [
    {userId : 1, userName: "hamza"},
    {userId : 2, userName: "arif"},
    {userId : 3, userName: "sualeh"},
    {userId : 4, userName: "maaz"},
    {userId : 5, userName: "haroon"},
];

const myUser = users.find(({userId}) => userId === 4);
// since, userIds are unique, this method is efficient

console.log(myUser);