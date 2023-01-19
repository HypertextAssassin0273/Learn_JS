/* 'super' keyword */

// automatically binds all the methods of parent class to the
// instance of child, so you don't have to manually do it: 
// i.e. super.method.apply(this)

class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){ return `${this.name} is eating`; }
    isSuperCute(){ return this.age <= 1; }
    isCute(){  return true; }
}

class Dog extends Animal{
    constructor(name, age, speed){
        super(name, age); // acts as base/parent class c'tor
        this.speed = speed;
    }

    run(){ return `${this.name} is running at ${this.speed} kmph`; }
}

// object / instance 
const tommy = new Dog("tommy", 3, 45);
console.log(tommy.run());
