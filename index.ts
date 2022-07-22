let id: number = 5;
let company: string = "Abhishek Choudhary";
let isPublishes: boolean = true;
let x: any = "Shit!";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Shit"];

// Tuple
let person : [number, string, boolean] =  [1, 'Brad', true];
// Tuple Array
let employee: [number, string,][]

employee = [
    [1,"Michael"],
    [2, "Franklin"],
    [3, "Trevor"]
]

// Union
let pid: string | number
pid = '22';
pid = 22;


// Enum
enum Direction1 {
    Up = 'Up',
    Down = "Down",
    Left = "Left",
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string,
}

const user: User = {
    id: 1,
    name: 'Abhi',
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;
customerId = 5;

// Functions
function addNum(x: number, y: number): number { // second number value is for the return type it should be number
    return x + y;
}

function log(message: string | number): void {
    console.log(message);
}

// Interfaces
interface UserInterface {
    readonly id: number, // you cannot reassing value to id cause it's read only now
    name: string,
    age?: number,
}

const user1 : UserInterface = {
    id: 1,
    name: 'John',
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(sub(5, 6));

// Classes
interface PersonInterface {
    id: number
    name: string
    register(): string
}


class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name
    }

    register() {
        return `${this.name} is now registered!`
    }
}

const abhi = new Person(5, "Abhishek");
const trev = new Person(6, "Trev");


class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp  = new Employee(3, 'Dean Winchester', 'Hunter');
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['abhi', 'trev', 'brad']);
// numArray.push('Poop!')
console.log(numArray);