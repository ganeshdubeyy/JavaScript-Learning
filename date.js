//Writing dates in JavaScript
let date = new Date(); // Current date and time
console.log(date);
console.log(date.getFullYear()); // Current year
console.log(date.toDateString()); // Current date in string format


//To get a specific date
let specificDate = new Date("2023-10-15"); // Specific date
console.log(specificDate);

//To create a date with specific components
let detailedDate = new Date(2023, 9, 15, 10, 30, 0); // Year, Month (0-11), Day, Hour, Minute, Second
console.log(detailedDate.toLocaleString()); // Local date and time format


