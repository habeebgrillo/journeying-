console.log('hello, world');

let email = 'marrio@gmail.com';
console.log(email);

//string concatenation

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting single characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods (some of these do not alter the original value)
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();

console.log(result, fullName);

// to get index of a string literal
let index = email.indexOf('@');
console.log(index);

//common string methods
