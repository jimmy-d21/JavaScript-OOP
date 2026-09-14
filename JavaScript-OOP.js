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

// Topic 1.4: The this Keyword (Object Context)
// this: Refers to the current execution context/object executing the method
const counter = {
  count: 0,
  increment() {
    this.count += 1;
    return this.count;
  },
};

console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2

// 2. Constructor Functions
// Topic 2.1: Constructor Functions & new Keyword
// Constructor Function: Called with 'new' to create objects; sets 'this' to the new instance
function Person(name, role) {
  this.name = name;
  this.role = role;
  this.getRole = function () {
    return this.role;
  };
}

const dev = new Person("Bob", "Developer");

console.log(dev.name); // Output: "Bob"
console.log(dev.getRole()); // Output: "Developer"

// Topic 2.2: Instance Properties vs. Instance Methods in Constructors
// Instance Methods inside constructor: Creates a new function copy for EVERY instance (high memory)
function Item(id) {
  this.id = id; // Instance Property
  this.getId = function () {
    return this.id;
  }; // Instance Method (Duplicates in memory)
}

const item1 = new Item(1);
const item2 = new Item(2);

console.log(item1.getId === item2.getId); // Output: false

// 3. Prototypes and Prototype-Based Inheritance
// Topic 3.1: Prototypes and prototype Property
// Constructor.prototype: Shared storage object for methods accessed by all instances
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const d1 = new Dog("Rex");
const d2 = new Dog("Buddy");

console.log(d1.bark()); // Output: "Rex barks!"
console.log(d1.bark === d2.bark); // Output: true

// Topic 3.2: The Prototype Chain, Object.getPrototypeOf(), and Object.setPrototypeOf()
// Prototype Chain: JS looks up prototype chain for missing properties; Object.getPrototypeOf() gets prototype
const animal = { eats: true };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps); // Output: true
console.log(rabbit.eats); // Output: true (Inherited via Prototype Chain)
console.log(Object.getPrototypeOf(rabbit) === animal); // Output: true

// Topic 3.3: Prototype Inheritance with Object.create()
// Object.create(proto): Creates a new object explicitly linked to specified prototype object
const UserProto = {
  init(name) {
    this.name = name;
    return this;
  },
  greeting() {
    return `Hi, I am ${this.name}`;
  },
};

const user2 = Object.create(UserProto).init("Charlie");

console.log(user2.greeting()); // Output: "Hi, I am Charlie"

// 4. JavaScript Classes
// Topic 4.1: class Declaration, constructor(), and Instance Methods
// class: Clean ES6 syntax for constructor functions and prototype method delegation
class Vehicle {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return `Vehicle type: ${this.type}`;
  }
}

const car2 = new Vehicle("Car");

console.log(car2.getType()); // Output: "Vehicle type: Car"
