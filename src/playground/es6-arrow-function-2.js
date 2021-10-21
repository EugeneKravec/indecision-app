// arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
// console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Eugene',
    cities: ['Kiyv', 'Odessa', 'Lublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

    }
}
// console.log(user.printPlacesLived())

// Challenge area

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multyply() {
        return this.numbers.map((el) => el * this.multiplyBy)
    }
}

console.log(multiplier.numbers);
console.log(multiplier.multyply());
