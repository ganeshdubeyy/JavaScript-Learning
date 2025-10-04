//Arrays in JavaScript - Basics
let fruits = ["Apple", "Banana", "Orange", "Mango"];
// console.log(fruits); // Accessing elements
// console.log(fruits[3]); // Accessing first element
// console.log(fruits.length); // Length of array
// fruits[1] = "Grapes"; // Modifying element
// console.log(fruits);
// // Adding and removing elements at the end of the array
// fruits.push("Pineapple"); // Adding element at the end
// console.log("Inserted element is:", fruits.push());
// fruits.pop(); // Removing last element
// console.log("Deleted element is:", fruits.pop()); // Removing last element and displaying it

// // Adding and removing elements at the beginning of the array
// fruits.unshift("Strawberry"); // Adding element at the beginning
// console.log("Inserted element at beginning is:", fruits.unshift()); // Adding element at the beginning and displaying it
// fruits.shift(); // Removing first element
// console.log("Deleted element at beginning is:", fruits.shift()); // Removing first element and displaying it
// console.log(fruits);

// //Some common array operations and methods

// // 1. Iterating over arrays
// // a. Using a for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log("For loop:", fruits[i]);
// }

// b. Using forEach method
fruits.forEach(function(fruit, index) {
    console.log(`forEach: ${fruit} at index ${index}`);
});
//another way of writing forEach
fruits.forEach((fruit) => {
    console.log("The Fruits are: ", fruit);
});


// c. Using for...of loop
for (let fruit of fruits) {
    // console.log("The Fruits are: ", fruit);
}


// 2. Searching for elements

console.log("Index of Mango:", fruits.indexOf("Mango")); // Returns index or -1
console.log("Includes Banana?", fruits.includes("Banana")); // true or false

// Using find to get the first element that matches a condition
let foundFruit = fruits.find(fruit => fruit.startsWith("A"));
console.log("First fruit starting with 'A':", foundFruit);


// 3. Removing/adding elements at specific positions

// splice(start, deleteCount, item1, item2, ...)
fruits.splice(2, 1, "Kiwi"); // Removes 1 element at index 2, adds "Kiwi"
console.log("After splice:", fruits);

// slice(start, end) returns a new array
let someFruits = fruits.slice(1, 3); // Elements from index 1 up to (not including) 3
console.log("Slice of fruits:", someFruits);



// 4. Sorting and reversing arrays

let sortedFruits = [...fruits].sort(); // Sorts alphabetically
console.log("Sorted fruits:", sortedFruits);

let reversedFruits = [...fruits].reverse(); // Reverses the array
console.log("Reversed fruits:", reversedFruits);


// 5. Creating arrays using Array.from, Array.of, and checking with Array.isArray

// Array.from: Creates a new array from an iterable or array-like object
let str = "Hello";
let charArray = Array.from(str);
console.log("Array from string:", charArray); // ['H', 'e', 'l', 'l', 'o']

// Array.of: Creates a new array from a variable number of arguments
let numbers = Array.of(10, 20, 30);
console.log("Array.of example:", numbers); // [10, 20, 30]

// Array.isArray: Checks if a value is an array
console.log("Is 'fruits' an array?", Array.isArray(fruits)); // true
console.log("Is 'str' an array?", Array.isArray(str)); // false

// ------------------IMPORTANT------------------------
// 6. Higher Order Array Methods: map, filter, reduce

// --- MAP ---
// The map() method creates a new array by applying a function to every element of the original array.
// It does NOT modify the original array.

let numbersArr = [1, 2, 3, 4, 5];

// Example 1: Double each number
let doubled = numbersArr.map(num => num * 2);
console.log("Doubled numbers:", doubled); // [2, 4, 6, 8, 10]

// Example 2: Convert numbers to strings with a prefix
let stringNumbers = numbersArr.map(num => `Number: ${num}`);
console.log("String numbers:", stringNumbers); // ["Number: 1", "Number: 2", ...]

// --- FILTER ---
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// It checks the condition and includes only those elements that return true.
// It does NOT modify the original array.

let mixedNumbers = [10, 15, 20, 25, 30];

// Example 1: Get only numbers greater than 20
let greaterThan20 = mixedNumbers.filter(num => num > 20);
console.log("Numbers greater than 20:", greaterThan20); // [25, 30]

// Example 2: Get even numbers
let evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [10, 20, 30]

// --- REDUCE ---
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// It can be used for summing, multiplying, or accumulating values in any way.

let values = [5, 10, 15];

// Example 1: Sum all numbers
let sum = values.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of values:", sum); // 30

// Example 2: Find the maximum value
let max = values.reduce((maxSoFar, current) => current > maxSoFar ? current : maxSoFar, values[0]);
console.log("Maximum value:", max); // 15

// --- Theory Recap ---
// - map: transforms each element and returns a new array of the same length.
// - filter: selects elements based on a condition and returns a new array (may be shorter).
// - reduce: combines all elements into a single value (number, string, object, etc.).

