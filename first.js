// Different data types in JavaScript

// let myname = "Ganesh";  // string
// let score = 95;       // number
// let isPassed = true;  // boolean
// let emptyBox = null;  // null
// let nothing;          // undefined
// let bigNumber = 12345678901234567890n; // bigint
// let uniqueId = Symbol("id"); // symbol
// console.log(myname, score, isPassed, emptyBox, nothing, bigNumber, uniqueId);
// console.log(typeof myname, typeof score, typeof isPassed, typeof emptyBox, typeof nothing, typeof bigNumber, typeof uniqueId);

// operators in JavaScript
let a = 10;
let b = 5;  
// Arithmetic operators :

// console.log("a + b =", a + b); // Addition  
// console.log("a - b =", a - b); // Subtraction
// console.log("a * b =", a * b); // Multiplication
// console.log("a / b =", a / b); // Division
// console.log("a % b =", a % b); // Modulus
// console.log("a ** b =", a ** b); // Exponentiation
// console.log("++a =", ++a); // Increment
// console.log("--b =", --b); // Decrement 

// Assignment operators :
// let c = a; // Assignment
// c += b; // c = c + b     
// c -= b; // c = c - b
// c *= b; // c = c * b
// c /= b; // c = c / b
// c %= b; // c = c % b
// c **= b; // c = c ** b
// console.log("c =", c);

// Comparison operators :
// console.log("a == b :", a == b); // Equal to
// console.log("a === b :", a === b); // Strict equal to
// console.log("a != b :", a != b); // Not equal to
// console.log("a !== b :", a !== b); // Strict not equal to
// console.log("a > b :", a > b); // Greater than
// console.log("a < b :", a < b); // Less than
// console.log("a >= b :", a >= b); // Greater than or equal to
// console.log("a <= b :", a <= b); // Less than or equal to

// Logical operators :
// console.log("a > 5 && b < 10 :", a > 5 && b < 10); // Logical AND
// console.log("a > 15 || b < 10 :", a > 15 || b < 10); // Logical OR
// console.log("!(a > b) :", !(a > b)); // Logical NOT
// console.log("!(a < b) :", !(a < b)); // Logical NOT
// console.log("!(a == b) :", !(a == b)); // Logical NOT

// String operators :
// let str1 = "Hello, World! ";
// let str2 = "to the world of JavaScript.";
// console.log("str1 + str2 =", str1 + str2); // Concatenation
// console.log("str1 += str2 =", (str1 += str2)); // Concatenation assignment
// console.log("str1[0] =", str1[0]); // Accessing character
// console.log("str1.length =", str1.length); // Length of string
// console.log("str1.toUpperCase() =", str1.toUpperCase()); // Convert to uppercase
// console.log("str1.toLowerCase() =", str1.toLowerCase()); // Convert to lowercase
// console.log("str1.indexOf('World') =", str1.indexOf('World')); // Index of substring
// console.log("str1.slice(0, 9) =", str1.slice(0, 9)); // Slicing string 
// console.log("str1.replace('World' with 'Universe') =", str1.replace('World', 'Universe')); // Replacing substring
// console.log("str1.trim() =", str1.trim()); // Trimming whitespace

// Template literals :
let myName = "Ganesh";
let age = 21;
// console.log(`My name is ${myName} and I am ${age} years old.`); // Using template literals
// console.log(`Next year, I will be ${age + 1} years old.`); // Using expressions in template literals
// console.log(`5 + 10 = ${5 + 10}`); // Using expressions in template literals

console.log('My name is ' + myName + ' and I am ' + age + ' years old.'); // Using concatenation