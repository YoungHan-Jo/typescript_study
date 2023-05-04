console.log('Hello Typescript!!')

function myFunc1(x: number, y: number): number {
    return x + y;
}

console.log(myFunc1(1, 3));

let myFunc2 = function (x: number, y: number): number {
    return x + y;
}

console.log('myFunc2: ', myFunc2(2, 3))

let myFunc3 = (x: number, y: number): number => {
    return x + y;
}

console.log('myFunc3: ', myFunc3(4, 5))





let myFunc4: (arg1: number, arg2: number) => number;
myFunc4 = function (x, y) {
    return x + y;
}

console.log('myfunc4')
console.log(myFunc4(1, 2))

let pracfunc4: (arg1: number, arg2: number) => number;
pracfunc4 = (x, y) => {
    return x + y;
}

console.log('pracfunc4')
console.log(pracfunc4(1, 2))




let myFunc5: (arg1: number, arg2: number) => number = (x, y) => {
    return x + y;
}

console.log('myFunc5')
console.log(myFunc5(2, 3))


let pracfunc5: (arg1: number, arg2: number) => number = (x, y) => {
    return x + y;
}


type Add1 = (x: number, y: number) => number;
let myFunc6: Add1 = (x, y) => {
    return x + y;
}

console.log('myfunc6:', myFunc6(1, 2))

let pracFunc6: Add1;
pracFunc6 = (x, y) => {
    return x + y;
}

console.log('pracfunc6:', pracFunc6(2, 3))

interface Add2 {
    (x: number, y: number): number;
}
let myFunc7: Add2 = (x, y) => {
    return x + y;
}
console.log('myfunc7:', myFunc7(1, 2))

let pracFunc7: Add2;
pracFunc7 = (x, y) => {
    return x + y;
}
console.log('pracFunc7:', pracFunc7(2, 3))


let isBoolean: boolean;
isBoolean = true;

let isDone: boolean = false;

let num: number;
let integer: number = 6;
let float: number = 3.14;

let nan: number = NaN;

function plus(num1: number, num2: number): number {
    return num1 + num2
}

console.log('plusfunction:', plus(1, 2))


let red: string = 'Red';
let green: string = "Green";
let yourColor: string = 'Your color is' + green;

let myColor: string = `My color is ${red}.`;

function strings(str1: string, str2: string): string {
    return str1 + ' and ' + str2;
}

console.log('strings:', strings(red, green))

// ========================================================
// Array
let fruits: string[] = ['Apple', 'Banana', 'Mango'];
// let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];

// 모든 데이터 타입 any[]
let someArr: any[] = [0, 1, {}, [], 'str', false];

// 특정 데이터 타입만 아이테믕로 사용 union
let selects: (number | string)[] = [1, 2, 3, 'one', 'two'];

function getArr(...args: number[]): number[] {
    return args;
}


let a = getArr(1, 2, 3, 4, 5, 7);

console.log('a:', a);


//======================================
// tuple, 사이즈가 정해전 배열, 타입순서 맞아야함

let rgbColor: [number, number, number] = [255, 255, 0];

let x: [string, number];

x = ['hello', 0]


let user: [number, string, boolean] = [1234, 'hello', true]
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);



// =============================================
// enum

enum Avengers { SpiderMan, IronMan, Hulk }

let hero: Avengers = Avengers.SpiderMan;

enum Color {
    RED,
    GREEN,
    BLUE,
}

let c: Color;
c = Color.BLUE;

let d = Color.RED

enum Week {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Week.Sun);
console.log(Week['Sun']);
console.log(Week[0]);

let weekName: string = Week[0];
console.log(weekName);


// =========================================
// Object

let obj: object = {};
let arr: object = [];
let func: object = function () { };
let nullValue: any = null;
let date: object = new Date();


// 객체 타입 선언시 가독성이 안좋음
let userA: { name: string, age: number };
userA = {
    name: 'John',
    age: 32
};

// type 리터럴인 alias으로 해결가능
type AUser = {
    name: string,
    age: number
}

let iuserA: AUser = {
    name: "A",
    age: 123
};

// 혹은 인터페이스로 가능
interface IUser {
    name: string,
    age: number
}

let IUser = {
    name: "B",
    age: 40
}


// ================================
// any type
let any: any = 123;
any = 'hello world!';
any = {};
any = null;

let list: any[] = [1, true, "free"]
console.log('list:', list)
list[1] = 100;

console.log('list:', list)


// =================================
// Unknown

let any1: any = 123;
let un: unknown = 123;

let value: any = 10;
console.log(value.length);

let valueNum: unknown = 10;
let valueStr: unknown = 'test';
// console.log(valueNum.length)
// unknown은 컴파일 에러 나옴

// typeof 를 이용하여 풀어낼 수 있다.
// 손이 좀 더 가지만 any 타입에 비해 안정적으로 개발 할 수 있다.
if (typeof valueStr === "string") {
    console.log(valueStr.length);
}


// ==================================
// void type

function hello(n: number): void {
    let sum: number = n + 1;
}

const hi: void = hello(1)
console.log('hi:', hi);


// =====================================
console.log('literal type')

const numLiteral = 3;

const arrLiteral = [1, 3];

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

function animate(dx: number, dy: number, easing: Easing) {
    // 
}

// =========================================
console.log('')
console.log('union')

let union: string | number;
union = 'hello world!'
union = 123;

let unionArr: (string | number)[] = ['apple', 1, 2, 3]

let unionArray: Array<string | number> = ['apple', 1, 2, 3]


// ============================================
// type alias


type Operation = {
    version: string,
    el: (selector: string) => void,
    css: (prop: string) => void
}

let Dam: Operation = {
    version: "",
    el: function (selector: string): void {
        throw new Error("Function not implemented.");
    },
    css: function (prop: string): void {
        throw new Error("Function not implemented.");
    }
}

type Name = string;
type Age = number;

let typename: Name = 'tom';
let typeage: Age = 13;


// =====================================
// interface
console.log('interface')

interface Person {
    name: string,
    age: number;
}

interface Developer extends Person {
    skill: string;
}


