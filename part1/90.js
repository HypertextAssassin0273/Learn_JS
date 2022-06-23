/* getters & setters */

// 'get' & 'set' keywords (somewhat) converts a method into a property
// (might be similar to inline functions of C++, in terms of optimization)

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("shahzaib", "khan", 22);

console.log('initially:', person1);

// person1.fullName("basit ali"); // error
person1.fullName = "basit ali";

// console.log(person1.fullName()); // error
console.log(person1.fullName);

console.log('afterwards:', person1);