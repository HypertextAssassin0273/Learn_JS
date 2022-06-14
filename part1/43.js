/* nested destructuring */

const users = [
    {userId: 1, firstName: 'shahzaib', gender: 'male'},
    {userId: 2, firstName: 'ali', gender: 'male'},
    {userId: 3, firstName: 'hamza', gender: 'male'},
];

// const [user1, user2, user3] = users;
// console.log(user2);

const [{firstName: user1firstName, userId: user1Id}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(user1Id);
console.log(user3gender);