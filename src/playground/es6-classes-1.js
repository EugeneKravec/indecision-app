class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age
    }
    getGreeting() {
        // return this.name;
        return `Hi! I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return this.major
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description = description + ` Their major is ${this.major}`
        }

        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;

    }

    getGreeting() {
        let greet = super.getGreeting();
        if (this.location) {
            greet += ` I'm visiting from ${this.location}`
        };

        return greet;
    }
}

const me = new Traveler('Eugene Kravec', 34, 'Kyiv');
console.log('me', me.getGreeting());

const other = new Traveler('Eugene Kravec', 34);
console.log('other', other.getGreeting());