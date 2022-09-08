// Imperative Programming
const arrayOfScores = [50, 60, 80, 30];

for (let i = 0; i < arrayOfScores.length; i++) {
    arrayOfScores[i] = arrayOfScores[i] / 10;
}

console.log(arrayOfScores);
// -> (4) [5, 6, 8, 3]

// Procedural Programming
const student = (function (name, score) {
    const _name = name,
        _score = score;

    const sayScore = function () {
        return `My name is ${_name} and my score is ${_score}.`;
    };

    return sayScore();
}("Georgi", 50));

console.log(student);
// -> My name is Georgi and my score is 50.

// Object-Oriented Programming
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    sayScore() {
        return `My name is ${this.name} and my score is ${this.score}.`;
    }
}
const georgi = new Student("Georgi", 50);
console.log(georgi.sayScore());
// -> My name is Georgi and my score is 50.

// Declarative Programming
console.log([50, 60, 80, 30].map(element => element / 10));
//-> (4) [5, 6, 8, 3]

// Deterministic Example
const BASE = 10;
const calculateScore = (score) => score / BASE;

calculateArea(80);
// -> 8

// Deterministic Example - Fix
const BASE = 10;
const calculateScore = (score, base) => score / base;

calculateScore(80, BASE);
// -> 8

// Side-effects Example
let score = 1;

function increaseScore(value) {
    score = value + 1;
}

increaseScore(score);
console.log(score);
// -> 2


// Side-effects Example - Fix
const score = 1;

const increaseScore = (value) => value + 1;

console.log(increaseScore(score));
// -> 2

console.log(score);
// -> 1

// Mutation Example
const scores = [30, 20, 80, 70, 60];
let sumOfScores = 0;

for (let i = 0; i < scores.length; i++) {
    sumOfScores += scores[i];
}

console.log(sumOfScores);
// -> 260

// Immutable Example
const scores = [30, 20, 80, 70, 60];
const accumulator = 0;

function sum(list, accumulator) {
    if (list.length === 0) {
        return accumulator;
    }

    return sum(list.slice(1), accumulator + list[0]);
}

console.log(sum(scores, accumulator));
// -> 260

console.log(scores);
// -> (5) [30, 20, 80, 70, 60]

console.log(accumulator);
// -> 0

// HOF Example
const students = [{
    name: "Peter",
    score: 60
}, {
    name: "Georgi",
    score: 20
}, {
    name: "Ivan",
    score: 80
}];

// Filtering the Dataset
function filter(array, predicate) {
    let passed = [];
    for (let element of array) {
        if (predicate(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(students, student => student.score > 20));
// -> [{"name":"Peter","score":60}, {"name":"Ivan","score":80}]

// Extracting the value we need form the dataset
function map(array, callback) {
    let mapped = [];
    for (let element of array) {
        mapped.push(callback(element));
    }
    return mapped;
}

console.log(map(filter(students, student => student.score > 20), student => student.score));
// -> 1. [{"name":"Peter","score":60}, {"name":"Ivan","score":80}]
// -> 2. [60, 80]

// Sum the scores
function reduce(array, reducer, accumulator) {
    let current = accumulator;
    for (let element of array) {
        current = reducer(current, element);
    }
    return current;
}

console.log(reduce(map(filter(students, student => student.score > 20), student => student.score), (x, y) => x + y, 0));
// -> 1. [{"name":"Peter","score":60}, {"name":"Ivan","score":80}]
// -> 2. [60, 80]
// -> 3. 140

const students = [{
    name: "Peter",
    score: [[30, 40], [60, 80]]
}, {
    name: "Georgi",
    score: [[60, 50], [70, 40]]
}, {
    name: "Ivan",
    score: [[90], [80]]
}];

// Prototype Object
function Student(name, score) {
    this.name = name
    this.score = score;
}

let student = new Student("Georgi", 60);

student.valueOf();

Student.prototype;

Object.prototype;

// Object.create()
let student1 = Object.create(student);

// Constructor Property
student.constructor
student1.constructor

let student3 = new student1.constructor('Ivan', 80);

// Modify Prototype
Student.prototype.sayScore = function () {
    return `My score is ${this.score}.`;
}

// Prototype Inheritance
function Student(name, score) {
    this.name = name
    this.score = score;
}

Student.prototype.myScore = function () {
    return `My score is ${this.score}.`;
}

// 1. Defining Assistant constructor function
function Assistant(name, score, subject) {
    Student.call(this, name, score);

    this.subject = subject;
}

// 2.Setting Prototype and Constructor Reference
Assistant.prototype = Object.create(Student.prototype);

Object.defineProperty(Assistant.prototype, 'constructor', {
    value: Assistant,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
});

// 3. Add new myScore function and test
Assistant.prototype.myScore = function () {
    return `No scores any more! I am assistant!`;
}

let assistant = new Assistant('Angel', 30);

// Source: http://es6-features.org
// Constants
const PI = 3.141593;
PI > 3.0

//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value: 3.141593,
    enumerable: true,
    writable: false,
    configurable: false
})
PI > 3.0;

// Scoping / Block-Scoped Variables
for (let i = 0; i < a.length; i++) {
    let x = a[i];
}
for (let i = 0; i < b.length; i++) {
    let y = b[i];
}

let callbacks = [];
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2; };
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
}
for (i = 0; i < b.length; i++) {
    y = b[i];
}

var callbacks = [];
for (var i = 0; i <= 2; i++) {
    (function (i) {
        callbacks[i] = function () { return i * 2; };
    })(i);
}
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;

// Scoping / Block-Scoped Functions
{
    function foo() { return 1; }
    foo() === 1;
    {
        function foo() { return 2; }
        foo() === 2;
    }
    foo() === 1;
}

//  only in ES5 with the help of block-scope emulating
//  function scopes and function expressions
(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();

// Arrow Function / Expression Bodies
odds = evens.map(v => v + 1);
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
nums = evens.map((v, i) => v + i);

odds = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums = evens.map(function (v, i) { return v + i; });

// Arrow Function / Statement Bodies
nums.forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});

nums.forEach(function (v) {
    if (v % 5 === 0)
        fives.push(v);
});

// Arrow Function / Lexical this

//  variant 1
var self = this;
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        self.fives.push(v);
});

//  variant 2
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}, this);

//  variant 3 (since ECMAScript 5.1 only)
this.nums.forEach(function (v) {
    if (v % 5 === 0)
        this.fives.push(v);
}.bind(this));

// Extended Parameter Handling / Default Parameters Value
function f(x, y = 7, z = 42) {
    return x + y + z;
}
f(1) === 50;

function f(x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};
f(1) === 50;

// Extended Parameter Handling / Rest Parameters
function f(x, y, ...a) {
    return (x + y) * a.length;
}
f(1, 2, "hello", true, 7) === 9;

function f(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f(1, 2, "hello", true, 7) === 9;

// Extended Parameter Handling / Spread Operator
var params = ["hello", true, 7];
var other = [1, 2, ...params]; // [ 1, 2, "hello", true, 7 ]

function f(x, y, ...a) {
    return (x + y) * a.length;
}
f(1, 2, ...params) === 9;

var str = "foo";
var chars = [...str]; // [ "f", "o", "o" ]

var params = ["hello", true, 7];
var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]

function f(x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [1, 2].concat(params)) === 9;

var str = "foo";
var chars = str.split(""); // [ "f", "o", "o" ]

// Template Literals / String Interpolation
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`;

var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" + "want to buy " + card.amount + " " + card.product + " for\n" + "a total of " + (card.amount * card.unitprice) + " bucks?";

// Enhanced Object Properties
var x = 0, y = 0;
obj = { x, y };

let obj = {
    foo: "bar",
    [ "baz" + quux() ]: 42
};

obj = {
    foo (a, b) {
        …
    },
    bar (x, y) {
        …
    },
    *quux (x, y) {
        …
    }
};

var x = 0, y = 0;
obj = { x: x, y: y };

var obj = {
    foo: "bar"
};
obj[ "baz" + quux() ] = 42;

obj = {
    foo: function (a, b) {
        …
    },
    bar: function (x, y) {
        …
    },
    //  quux: no equivalent in ES5
    …
};

// Destructuring Assignment

// Array Matching
var list = [ 1, 2, 3 ];
var [ a, , b ] = list;
[ b, a ] = [ a, b ];

// Object Matching, Shorthand Notation
var { op, lhs, rhs } = getASTNode();

// Object Matching, Deep Matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

// Object And Array Matching, Default Values
var obj = { a: 1 };
var list = [ 1 ];
var { a, b = 2 } = obj;
var [ x, y = 2 ] = list;

// Parameter Context Matching
function f ([ name, val ]) {
    console.log(name, val);
}
function g ({ name: n, val: v }) {
    console.log(n, v);
}
function h ({ name, val }) {
    console.log(name, val);
}
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });

// Array Matching
var list = [ 1, 2, 3 ];
var a = list[0], b = list[2];
var tmp = a; a = b; b = tmp;

// Object Matching, Shorthand Notation
var tmp = getASTNode();
var op  = tmp.op;
var lhs = tmp.lhs;
var rhs = tmp.rhs;

// Object Matching, Deep Matching
var tmp = getASTNode();
var a = tmp.op;
var b = tmp.lhs.op;
var c = tmp.rhs;

// Object And Array Matching, Default Values
var obj = { a: 1 };
var list = [ 1 ];
var a = obj.a;
var b = obj.b === undefined ? 2 : obj.b;
var x = list[0];
var y = list[1] === undefined ? 2 : list[1];

// Parameter Context Matching
function f (arg) {
    var name = arg[0];
    var val  = arg[1];
    console.log(name, val);
};
function g (arg) {
    var n = arg.name;
    var v = arg.val;
    console.log(n, v);
};
function h (arg) {
    var name = arg.name;
    var val  = arg.val;
    console.log(name, val);
};
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });

// Modules

// Value Export/Import
//  lib/math.js
export function sum (x, y) { return x + y };
export var pi = 3.141593;

//  someApp.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));

//  otherApp.js
import { sum, pi } from "lib/math";
console.log("2π = " + sum(pi, pi));

LibMath = {};
LibMath.sum = function (x, y) { return x + y };
LibMath.pi = 3.141593;

//  someApp.js
var math = LibMath;
console.log("2π = " + math.sum(math.pi, math.pi));

//  otherApp.js
var sum = LibMath.sum, pi = LibMath.pi;
console.log("2π = " + sum(pi, pi));

// Default & Wildcard
//  lib/mathplusplus.js
export * from "lib/math";
export var e = 2.71828182846;
export default (x) => Math.exp(x);

//  someApp.js
import exp, { pi, e } from "lib/mathplusplus";
console.log("e^{π} = " + exp(pi));

//  lib/mathplusplus.js
LibMathPP = {};
for (symbol in LibMath)
    if (LibMath.hasOwnProperty(symbol))
        LibMathPP[symbol] = LibMath[symbol];
LibMathPP.e = 2.71828182846;
LibMathPP.exp = function (x) { return Math.exp(x) };

//  someApp.js
var exp = LibMathPP.exp, pi = LibMathPP.pi, e = LibMathPP.e;
console.log("e^{π} = " + exp(pi));

// Classes
// Class Definition
class Shape {
    constructor (id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
}

var Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

// Class Inheritance
class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y);
        this.width  = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}

var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width  = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var Circle = function (id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Static Members
class Rectangle extends Shape {
    …
    static defaultRectangle () {
        return new Rectangle("default", 0, 0, 100, 100);
    }
}
class Circle extends Shape {
    …
    static defaultCircle () {
        return new Circle("default", 0, 0, 100);
    }
}
var defRectangle = Rectangle.defaultRectangle();
var defCircle    = Circle.defaultCircle();

var Rectangle = function (id, x, y, width, height) {
    …
};
Rectangle.defaultRectangle = function () {
    return new Rectangle("default", 0, 0, 100, 100);
};
var Circle = function (id, x, y, width, height) {
    …
};
Circle.defaultCircle = function () {
    return new Circle("default", 0, 0, 100);
};
var defRectangle = Rectangle.defaultRectangle();
var defCircle    = Circle.defaultCircle();

// Getter and Setter
class Rectangle {
    constructor (width, height) {
        this._width  = width;
        this._height = height;
    }
    set width  (width)  { this._width = width;               }
    get width  ()       { return this._width;                }
    set height (height) { this._height = height;             }
    get height ()       { return this._height;               }
    get area   ()       { return this._width * this._height; }
};
var r = new Rectangle(50, 20);
r.area === 1000;

var Rectangle = function (width, height) {
    this._width  = width;
    this._height = height;
};
Rectangle.prototype = {
    set width  (width)  { this._width = width;               },
    get width  ()       { return this._width;                },
    set height (height) { this._height = height;             },
    get height ()       { return this._height;               },
    get area   ()       { return this._width * this._height; }
};
var r = new Rectangle(50, 20);
r.area === 1000;