/* class practice & 'extends' keyword */

class Animal { // base/parent class 
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){ return `${this.name} is eating`; }
    isSuperCute(){ return this.age <= 1; }
    isCute(){ return true; }
}

class Dog extends Animal{ // sub/derived/child class 
    bark(){ return 'woof woof!'; }
}

const tommy = new Dog("tommy", 3);

console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.bark());