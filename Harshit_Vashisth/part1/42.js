/* objects inside array */
// very useful in real world applications

const users = [
    {userId: 1, firstName: 'shahzaib', gender: 'male'},
    {userId: 2, firstName: 'ali', gender: 'male'},
    {userId: 3, firstName: 'hamza', gender: 'male'},
]

for(let user of users){
    console.log(user.firstName);
}