// boolean & comparisons

console.log(true, false);


// methods can return booleans
let email = 'luigi@netninja.com';
let names = ['mario', 'luigi', 'toad'];



let result = email.includes('@'); // will retunr true, it checks if the characteer is there
let result = names.includes('luigi'); // it checks the array and returns true

// comparison operators


let age = 25;

console.log(age == 25); // this will return true
console.log(age == 30); // this will return false
console.log(age != 30); // this will return true
console.log(age > 20); // this will return true
console.log(age < 20); // this will return false
console.log(age <= 25); // this will return true
console.log(age >= 25); // this will return true


let name = 'shawn';

console.log(name == 'shawn'); // will return true
console.log(name == 'Shawn'); // will return false
console.log(name > 'crystal'); // will return true because of precedence of the letters
console.log(name > 'Shawn'); // will return false


// loose comparison, only checks the value (different types can still be equal)

let age2 = 25;

console.log(age2 == 25); // will return true
console.log(age2 == '25'); // will return true
console.log(age2 != 25); // will return false
console.log(age2 != '25'); // will return false

// strict comparison, to check the value and data type (different types cannot be equal)

console.log(age2 === 25); // will return true
console.log(age2 === '25'); // will return true
console.log(age2 !== 25); // will return false
console.log(age2 !== '25'); // will return false