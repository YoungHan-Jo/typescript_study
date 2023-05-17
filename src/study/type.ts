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

function getArr(...args: number[]): number[] {
    return args;
}

let resultArr = getArr(1, 2, 3, 4, 5);
console.log(resultArr);
console.log('type is', typeof (resultArr)) // object

// tuple type
let rgbColor: [number, number, number] = [255, 255, 0]


// Enum
enum Avengers {
    SpiderMan,
    IronMan,
    Thor,
    Hulk
}

let hero: Avengers = Avengers.SpiderMan;


// Object (array, function etc..)
let userA: { name: string, age: number }
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
let userC: InterfaceUser = {
    name: "Sam",
    age: 40
}

// any vs unknown

let anyValue: any = 10;
console.log(anyValue.length); //undefined

let unknownValue: unknown = 'abcdefg';
// console.log(unknownValue.length);　// type check しないと使えない
if (typeof unknownValue === "string") { // unknownnの方がanyより安定的
    console.log(unknownValue.length);
}


// never type
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("something is wrong")
}
// let failResult = fail();

function fn(input: never) { }

declare let myNever: never;
// fn(myNever);

function unknownColor(x: never): never {
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
function hello(n: number): void {
    let sum: number = n + 1;
}

// literal type , overloadを使うとき

const constNum = 3;

type Animal = 'Bear' | 'Cat' | 'dog'

function introduce(name: string, age: number, animal: Animal) {
    console.log('my name is', name, 'i am', age, 'years old', 'and my favorite animal is', animal);
}

introduce('tom', 24, 'Cat');


// union 
// いずれかの一つのタイプが使える
let union: string | number;
union = 'Hello world';
union = 10;
// union = false; // 不可能

let unionArray1: (string | number)[] = ['string', 123, 'map', 33];

let unionArray2: Array<string | number> = ['string', 123, 'map', 33];


function padLeft(value: string, padding: boolean | number) {

}
padLeft("hellow world", false);
padLeft("hellow nodejs", 200);

// union 注意事項
type Person = {
    name: string;
    age: number;
}

type Developer = {
    name: string;
    skill: string;
}

function introduceSomeone(someone: Person | Developer) {
    someone.name;
    // object の場合共通プロパティだけが使える
    // someone.age;
    // someone.skill;
}


// intersection ' & ' -> おすすめじゃない、新しいtypeを作ったほうがいい
const developerPersion: Person & Developer = {
    name: 'kim',
    age: 22,
    skill: 'java'
}

// type alias , ユーザーカスタムtype
let User: { id: number, name: string, changeName: (id: number, newName: string) => number } = {
    id: 1,
    name: 'tom',
    changeName(id, newName) {
        this.name = newName;
        return this.id;
    }
}

type UserAlias = {
    name: string,
    changeName: (newName: string) => string
}

let userByAlias: UserAlias = {
    name: "jack",
    changeName: function (newName: string): string {
        this.name = newName;
        return this.name;
    }
}

console.log(userByAlias.name);
userByAlias.changeName("Blake");
console.log('change the name')
console.log(userByAlias.name);

// interface
interface PersonByIF {
    name: string;
    age: number;
}

interface DeveloperByIF extends PersonByIF {
    skill: string;
}

function logUser(obj: DeveloperByIF) {
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.skill);
}

let person: DeveloperByIF ={
    name: "Alice",
    age: 22,
    skill: "python"
}

logUser(person)


// Generic
type IsArray<T> = T[];

const numberArr: IsArray<number> = [1,2,3,4,5]
const stringArr: IsArray<string> = ['a','b','c']
const mixArr: IsArray<number | string> = [1,2,3,'a','b']

function getText<T>(text: T): T{
    return text;
}

console.log(getText(1));
console.log(getText(false));
console.log(getText('ABC'));



























