1. Variable declaration

let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);

const points = 100;

console.log(points);

var score = 75;
console.log(score);

======================================================================

2. Strings

console.log('hello, world);

let email = 'marrio@gmail.com;
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


let email = 'marrio@gmail.com';


let result = email.lastIndexOf('m'); //finds the index of the conataining letter
 
let result = email.slice(0,8) //this slice from the index postition to another index position and displays it

let result = email.substring(0,6) //this takes the characters from the first index up till the number of characters specified and shows all inbetween

let result = email.replace('m', 'p') // this replaces the first character specified with the second, it also do it for only the first occurence of such character found


========================

//numbers

let radius = 10;
const pi = 3.14;

// math operators +, -, *, /, **(to the power of), %

let result = pi * radius**2; //this is area of a circle

//order of operation  B I D M A S

let result = 5 * (10-3)**2; //answer will be 245

// example

let likes = 10;

likes = likes + 1; // this will be 11

// but
likes++; //(Shorthand) //will also be 11
likes--

likes+=10; //same as likes = likes + 10
likes-=5;
likes*=2;
likes/=2;

// NaN - not a number

 console.log(5 / 'hello'); // result will be NaN


 // concatenate numbers

 let result = 'the blog has ' + likes + 'likes';


 ==================

 // template strings

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

//concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';


//template string way or template literal
let result = `The blog called ${title} by ${author} has ${likes} likes`;

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;

==================================================================


// arrays

let ninjas = ['shawn', 'ryu', 'chun-li'];


ninjas[1] = 'ken'; // this is going to re-assign the value on the index
console.log(ninjas[1])

let ages = [20, 21, 24, 35];
console.log(ages[2]); // this also works on numbers

let random = ['shawn', 'men', 30, 45] //it is also possible to include numbers and strings in an array
console.log(random);



console.log(ninjas.length);  // this will check the length of the array

// array methods

let result1 = ninjas.join(',');  // takes an array and joins with whatever was supplied and puts it in-between the arrays

let result2 = ninjas.indexOf('chun-li'); // finds the index of the element that was supplied

let result3 = ninjas.concat(['ben', 'crystal']); // joining an array into another array

let result4 = ninjas.push('ken'); //this pushes a new value and logs out the new length into the array ()

let result = ninjas.pop('beeb'); //takes off the last value and changes the array

console.log(result);

================================================

// undefined

let age;  // unassigned will result to undefined

console.log(age, age + 3, `the age is ${age}`);  // this will output undefined, NaN `the age is undefined` cuz it has not been assigned a value

 
// null

let age1 = null; //explicitlly declaring as null

console.log(age1, age1 + 3, `the age is ${age1}`); // result will be null

