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

// Topic 4.2: Static Methods and Static Properties
// static: Defines properties/methods on the Class itself, NOT called on instances
class MathUtils {
  static PI = 3.14159;

  static calculateArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.calculateArea(10)); // Output: 314.159

// Topic 4.3: Getters and Setters
// get / set: Binds object property lookup/assignment to custom function execution
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set celsius(val) {
    if (val < -273.15) throw new Error("Below Absolute Zero!");
    this._celsius = val;
  }
}

const temp = new Temperature(25);

console.log(temp.fahrenheit); // Output: 77

temp.celsius = 0;

console.log(temp.fahrenheit); // Output: 32

// Topic 4.4: Public Fields, Private Fields (#), and Private Methods
// #field / #method: Hard private members in ES2022; inaccessible outside class scope
class BankAccount {
  publicLabel = "Checking";
  #balance = 0; // Private field

  constructor(initialDeposit) {
    this.#balance = initialDeposit;
  }

  #logTransaction(type, amount) {
    // Private method
    return `${type}: $${amount}`;
  }

  deposit(amount) {
    this.#balance += amount;
    return this.#logTransaction("Deposit", amount);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);
account.deposit(50);

console.log(account.getBalance()); // Output: 150
// console.log(account.#balance);  // Output: SyntaxError: Private field '#balance' must be declared in an enclosing class

// 5. The Four Main OOP Principles
// Topic 5.1: Encapsulation
// Encapsulation: Grouping data + behavior together and hiding internal implementation details
class Wallet {
  #funds = 0;

  addFunds(amount) {
    if (amount > 0) this.#funds += amount;
  }

  getFunds() {
    return this.#funds;
  }
}

const myWallet = new Wallet();
myWallet.addFunds(50);

console.log(myWallet.getFunds()); // Output: 50

// Topic 5.2: Abstraction
// Abstraction: Exposing simple public interface while hiding complex execution steps internally
class CoffeeMachine {
  #boilWater() {
    return "Water boiled";
  }
  #brewGrinds() {
    return "Coffee extracted";
  }

  makeCoffee() {
    // High-level abstracted interface
    this.#boilWater();
    this.#brewGrinds();
    return "Hot Coffee Ready!";
  }
}

const machine = new CoffeeMachine();

console.log(machine.makeCoffee()); // Output: "Hot Coffee Ready!"

// Topic 5.3: Inheritance
// Inheritance: Deriving properties and methods from parent class to child class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Animal {
  meow() {
    return `${this.name} says meow!`;
  }
}

const kitty = new Cat("Whiskers");

console.log(kitty.eat()); // Output: "Whiskers is eating."
console.log(kitty.meow()); // Output: "Whiskers says meow!"

// Topic 5.4: Polymorphism
// Polymorphism: Calling same method name on different class objects yields distinct behaviors
class Shape {
  draw() {
    return "Drawing a generic shape";
  }
}

class Circle extends Shape {
  draw() {
    return "Drawing a Circle ◯";
  }
}

class Square extends Shape {
  draw() {
    return "Drawing a Square ▢";
  }
}

const shapes = [new Circle(), new Square(), new Shape()];

shapes.forEach((shape) => console.log(shape.draw()));
// Output: "Drawing a Circle ◯"
// Output: "Drawing a Square ▢"
// Output: "Drawing a generic shape"

// 6. Class Inheritance Mechanics
// Topic 6.1: extends, super, Method Overriding, and Multilevel Inheritance
// extends/super: Extends parent class; super() executes parent constructor/methods; override redefines methods
class Person {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return `Person: ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, salary) {
    super(name); // Must call parent constructor before using 'this'
    this.salary = salary;
  }

  describe() {
    // Method overriding
    return `${super.describe()}, Salary: $${this.salary}`;
  }
}

class Manager extends Employee {
  // Multilevel inheritance
  constructor(name, salary, dept) {
    super(name, salary);
    this.dept = dept;
  }
}

const mgr = new Manager("Alice", 90000, "Engineering");

console.log(mgr.describe()); // Output: "Person: Alice, Salary: $90000"

// Topic 6.2: Composition vs. Inheritance
// Composition over Inheritance: Combine small functional behaviors instead of deep class inheritance trees
const canFly = (state) => ({
  fly: () => `${state.name} is flying!`,
});

const canSwim = (state) => ({
  swim: () => `${state.name} is swimming!`,
});

// Composing objects dynamically
function createDuck(name) {
  const state = { name };
  return { ...state, ...canFly(state), ...canSwim(state) };
}

const duck = createDuck("Donald");

console.log(duck.fly()); // Output: "Donald is flying!"
console.log(duck.swim()); // Output: "Donald is swimming!"

// 7. Advanced OOP Concepts
// Topic 7.1: Method Chaining
// Method Chaining: Return 'this' from instance methods to enable dot-chained method calls
class Calculator {
  constructor(val = 0) {
    this.val = val;
  }

  add(n) {
    this.val += n;
    return this; // Enable chaining
  }

  multiply(n) {
    this.val *= n;
    return this; // Enable chaining
  }
}

const result = new Calculator(2).add(3).multiply(4).val;

console.log(result); // Output: 20

// Topic 7.2: Factory Functions
// Factory Function: Returns new objects without using 'new' or 'this' keyword
function createUser(name, role) {
  return {
    name,
    role,
    getDetails() {
      return `${name} is a ${role}`;
    },
  };
}

const user3 = createUser("Dave", "Admin");

console.log(user3.getDetails()); // Output: "Dave is a Admin"

// Topic 7.3: Mixins
// Mixin: Assigns reusable behavior properties onto object prototypes without subclassing
const LoggableMixin = {
  log(msg) {
    console.log(`[LOG]: ${msg}`);
  },
};

class UserProfile {
  constructor(username) {
    this.username = username;
  }
}

// Mix properties onto class prototype
Object.assign(UserProfile.prototype, LoggableMixin);

const profile = new UserProfile("sarah123");

profile.log("Profile loaded"); // Output: "[LOG]: Profile loaded"

// Topic 7.4: Symbols in Object-Oriented Programming
// Symbol: Unique, non-string property key preventing collisions and hidden from standard iterations
const INTERNAL_ID = Symbol("internalId");

class Record {
  constructor(id) {
    this[INTERNAL_ID] = id;
  }

  getId() {
    return this[INTERNAL_ID];
  }
}

const rec = new Record("REC_99");

console.log(rec.getId()); // Output: "REC_99"
console.log(Object.keys(rec)); // Output: [] (Invisible in standard key enumerations)
