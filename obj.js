//Objects in JavaScript
let person = {
    name: "John",
    age: 30,    
    city: "New York"
};
//console.log(person);
// console.log(person.name); // Accessing property
// console.log(person["age"]); // Accessing property
// person.age = 31; // Modifying property
// console.log(person);
// person.country = "USA"; // Adding property
// console.log(person);
// delete person.city; // Deleting property
// console.log(person);
// console.log(person);

//Practice
let book = {
    title : "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    pages : 180,
}
// console.log(book);

let student = {
    name : "Alice",
    marks : {
        Math : 85,
        English : 90,
        Science : 95
    }
};
// console.log(student);
// console.log(student.marks.Math);


//Mini Task 3: Array of Objects products
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Smartphone", price: 20000 },
  { id: 3, name: "Headphones", price: 2000 }
];

// console.log(products);
// console.log(products[0].name);   // Laptop
// console.log(products[2].price); // 2000
// console.log(products.length); // 3
//Here, every product is an object, and this entire list is an array of objects.


//Mini Task 4: Method introduce()
let personObj = {
  name: "Ganesh",
  age: 20,
  introduce() {                 //method of the object
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

personObj.introduce();