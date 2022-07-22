"use strict";
let id = 5;
let company = "Abhishek Choudhary";
let isPublishes = true;
let x = "Shit!";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Shit"];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, "Michael"],
    [2, "Franklin"],
    [3, "Trevor"]
];
// Union
let pid;
pid = '22';
pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Abhi',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid;
let customerId = cid;
customerId = 5;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const abhi = new Person(5, "Abhishek");
const trev = new Person(6, "Trev");
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Dean Winchester', 'Hunter');
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['abhi', 'trev', 'brad']);
// numArray.push('Poop!')
console.log(numArray);
