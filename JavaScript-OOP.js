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
