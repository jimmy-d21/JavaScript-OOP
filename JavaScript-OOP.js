// 1. OOP Fundamentals
// Topic 1.1: What is OOP?
// OOP: Paradigm organizing code into objects containing state (properties) and behavior (methods)
const car = {
  make: "Toyota",
  start() {
    return "Engine started";
  },
};

console.log(car.make); // Output: "Toyota"
console.log(car.start()); // Output: "Engine started"

// Topic 1.2: Objects, Properties, Methods, and Object Literals
// Object Literal: Key-value container; properties hold data, methods hold functions
const user = {
  name: "Alice", // Property
  age: 25, // Property
  greet() {
    // Method
    return "Hello!";
  },
};

console.log(user.name); // Output: "Alice"
console.log(user.greet()); // Output: "Hello!"

// Topic 1.3: Accessing and Modifying Properties
// Property Access: obj.key (static) or obj['key'] (dynamic/special chars); delete obj.key removes property
const book = { title: "JS Guide" };

// Dot & Bracket notation
book.author = "John Doe";
book["page-count"] = 300;
delete book.title;

console.log(book.author); // Output: "John Doe"
console.log(book["page-count"]); // Output: 300
console.log(book.title); // Output: undefined
