// const squareFirst = function (x) {
//     return x * x;
// }
// console.log(squareFirst(4));


// function squareSecond(x) {
//     return x * x;
// }
// console.log(squareSecond(5));


// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;
// console.log(squareArrow(6));

// ===========================================

// Challenge - Use arrow functions
// getFirstName('Eugene Kravec') -> 'Eugene'
// Create regular arrow function
// Create arrow function using shorthand syntax

const fullName = 'Eugene Kravec';

// if (fullName) {
//     firstName = fullName.split(' ')[0]
//     console.log(firstName);
// }

const getFirstName = (name) => {
    return name.split(' ')[0]
}
console.log(getFirstName(fullName));

const getSecondName = (name) => name.split(' ')[1];
console.log(getSecondName(fullName));
