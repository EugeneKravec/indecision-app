var nameVar = 'Eugene';
// var nameVar = 'Kravec';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julia';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName
}

const petName = getPetName()
console.log(petName);

// Block scoping

const fullName = 'Eugene Kravec';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}
console.log(firstName);