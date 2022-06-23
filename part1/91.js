/* 'static' methods & properties (inside class) */

// such methods & properties are not the part of object/instance,
// they are associated with that class only

// the instances of such class shares the static methods & properties,
// means seperate memory won't be allocated for them in each instance

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo(){ return 'this is a person class'; }
    static desc = "static property of person class";
    
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){ return `${this.firstName} is eating`; }
    isSuperCute(){ return this.age <= 1; }
    isCute(){ return true; }
}

const person1 = new Person("shahzaib", "khan", 22);

console.log(person1.eat());

// console.log(person1.desc); // undefined
console.log(Person.desc);

console.log(Person.classInfo());