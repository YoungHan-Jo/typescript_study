import { random } from "lodash";

console.log('Hello Typescript!!')


// Boolean type
let isBoolean: boolean;
isBoolean = true;

let isDone: boolean = false;


// Number type
let num: number;

let infinity: number = Infinity;
let nan: number = NaN;

function plus(num1: number, num2: number): number {
    return num1 + num2;
}

let a: number = 2;
let b: number = 3;

let result = plus(a, b);
console.log(a, '+', b, '=', result);

let type: string;

type = typeof (result);
console.log('typeOf: ', type);

// string type
let red: string = 'red';

let green: string = "Green";
let yourColor: string = 'Your color is' + green;

let myColor: string = `My color is ${red}.`;

console.log(myColor)

// Array type
let fruits: string[] = ['Apple', 'Banana', 'Orange']

fruits.forEach(fruit => {
    console.log(fruit)
});

let animals: Array<string> = ['bear', 'cat', 'dog']
animals.forEach(element => {
    console.log(element)
});

let anythings: any[] = [true, 1, 'string']
anythings.forEach(element => {
    console.log(element)
});

function getArr(...args: number[]): number[]{
    return args;
}

let resultArr = getArr(1,2,3,4,5);
console.log(resultArr);
console.log('type is',typeof(resultArr)) // object

// tuple type
let rgbColor: [number, number, number] = [255,255,0]


// Enum
enum Avengers {
    SpiderMan,
    IronMan,
    Thor,
    Hulk
}

let hero: Avengers = Avengers.SpiderMan;


// Object (array, function etc..)
let userA: {name: string, age: number}
userA = {
    name: 'Tom',
    age: 22
}

// => aliasで表現
type AliasUser = {
    name: string,
    age: number
}
let userB: AliasUser = {
    name: 'Jack',
    age: 33
}
// => interfaceで表現
interface InterfaceUser {
    name: string,
    age: number
}
let userC: InterfaceUser ={
    name: "Sam",
    age: 40
}

// any vs unknown

let anyValue: any = 10;
console.log(anyValue.length); //undefined

let unknownValue: unknown = 'abcdefg';
// console.log(unknownValue.length);　// type check しないと使えない
if(typeof unknownValue === "string"){ // unknownnの方がanyより安定的
    console.log(unknownValue.length);
}


// never type
function error(message: string): never {
    throw new Error(message);
}

function fail(){
    return error("something is wrong")
}
// let failResult = fail();

function fn(input: never){}

declare let myNever: never;
// fn(myNever);

function unknownColor(x: never): never{
    throw new Error('unknown color')
}

type Color = 'red' | 'green' | 'blue'

function getColorName(c: Color): string {
    switch (c) {
        case 'red':
            return 'is red'
        case 'green':
            return 'is green'
        case 'blue':
            return 'is blue'
        default:
            return unknownColor(c); 
    }
}

// void
function hello(n: number):void{
    let sum: number = n + 1;
}

// literal type , overloadを使うとき

const constNum = 3;

type Animal = 'Bear' | 'Cat' | 'dog'

function introduce(name: string, age: number, animal: Animal){
    console.log('my name is', name, 'i am', age, 'years old', 'and my favorite animal is', animal);
}

introduce('tom',24,'Cat');

























