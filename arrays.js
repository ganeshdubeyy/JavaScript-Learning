//Arrays in JavaScript
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits); // Accessing elements
console.log(fruits[3]); // Accessing first element
console.log(fruits.length); // Length of array
fruits[1] = "Grapes"; // Modifying element
console.log(fruits);
fruits.push("Pineapple"); // Adding element at the end
console.log("Inserted element is:", fruits.push());
fruits.pop(); // Removing last element
console.log("Deleted element is:", fruits.pop()); // Removing last element and displaying it

// Adding and removing elements at the beginning of the array
fruits.unshift("Strawberry"); // Adding element at the beginning
console.log("Inserted element at beginning is:", fruits.unshift()); // Adding element at the beginning and displaying it
fruits.shift(); // Removing first element
console.log("Deleted element at beginning is:", fruits.shift()); // Removing first element and displaying it
console.log(fruits);

