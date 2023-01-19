/* call, apply, bind methods */

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby, favMusician);
}

const user1 = {
    firstName : "noman",
    age: 18
},
user2 = {
    firstName : "aslam",
    age: 19
};

// call:
about.call(user1, "guitar", "bach");

// apply:
about.apply(user1, ["guitar", "bach"]);

// bind:
const func = about.bind(user2, "coding", "asim_azhar");
func(); // can be used to call in future