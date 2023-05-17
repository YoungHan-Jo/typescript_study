interface Human {
    name: string;
    age: number;
    getName: () => string;
    // getName(): string; 同じ表現方法
}

let person: Human = {
    name: "Tom",
    age: 30,
    getName: function (): string {
        return this.name;
    }
}

console.log(person.getName())
console.log(person.age);

function introduce(a: Human): void {
    console.log(`My name is ${a.getName()}, ${a.age} years old`)
}

introduce(person);


// 選択的なプロパティ
interface CraftBeer {
    name: string;
    hope?: number; // number | undefined
}

function brewBeer(beer: CraftBeer) {
    console.log(beer.name);
}

let myBeer: CraftBeer = {
    name: 'Asahi'
}

brewBeer(myBeer);

// type guard
if (myBeer.hope && myBeer.hope < 10) {
    console.log(myBeer.hope);
} else {
    console.log('hope値がありません。')
}

myBeer.hope = 3;
if (myBeer.hope && myBeer.hope < 10) {
    console.log(myBeer.hope);
} else {
    console.log('hope値がありません。')
}


// read only property
enum Gender {
    Male,
    Female
}
interface UserInterface3 {
    name: string;
    age: number;
    gender: Gender;
    readonly birthday: number;
}

let user: UserInterface3 = {
    name: "Jack",
    age: 20,
    gender: Gender.Male,
    birthday: 20030101
}

// user.birthday = 20001010; // read only

console.log(user);


// interface　合わせ
interface FullName {
    firstName: string;
    lastName: string;
}

interface FullName {
    middleName: string;
}

const fullName: FullName = {
    firstName: "A",
    lastName: "C",
    middleName: "B"
}


// interface extends

interface Person {
    name: string;
}

interface Developer extends Person {
    skill: string;
}

let dev: Developer = {
    name: "Alice",
    skill: "JAVA"
}

interface Address {
    address: string;
}

interface IUser extends Developer, Address { }

let iUser: IUser = {
    skill: "",
    name: "",
    address: ""
}


// call signature
interface Login {
    (username: string, password: string): boolean;
}

let loginUser: Login = (id, pw) => {
    console.log(id, 'login success')
    return true;
}

console.log(loginUser('Sam', 'password'));


interface GetText {
    (name: string, age: number): string;
    totalCall?: number;
}

const getText2: GetText = (name, age) => {
    if (getText2.totalCall !== undefined) {
        getText2.totalCall += 1;
        console.log(`totalCall: ${getText2.totalCall}`);
    }
    return '';
}

getText2.totalCall = 0;
getText2('sam', 23)
getText2('jam', 24)
getText2('ram', 25)

interface Object {
    getShortKeys(this: object): string[];
}

Object.prototype.getShortKeys = function () {
    return Object.keys(this).filter((key) => key.length <= 3);
}

const obj = {
    a: 11,
    bb: 22,
    ccc: 33,
    dddd: 44
}

console.log(obj.getShortKeys());


// interface function overload
interface Add {
    (x: number, y: number): number;
    (x: string, y: string): string;
}
const iAdd: Add = (x: any, y:any) => x + y;

console.log(iAdd('hello','world'))
console.log(iAdd(1,2))


interface UserInterface {
    name: string;
    getName(): string;
}

class UserClass implements UserInterface {
    name: string;

	constructor(name: string) {
        this.name = name;
	}
    
    getName(): string {
        return this.name;
    }
}

const sam = new UserClass("sam")
console.log(sam.getName());

// construct signature
interface CatConstrutor{
    new (name: string): Cat;
}

class Cat{

	constructor(public name: string) {
	}
}

function makeKitten(c: CatConstrutor, n: string){
    return new c(n);
}

const kitten = makeKitten(Cat,'Lucy');
console.log(kitten.name);


// indexable type

type Score = 'A' | 'B' | 'C' | 'D' | 'F'

interface UserIF {
    name: string;
    [grade: number]: Score;
}

const userA: UserIF = {
    name: "James",
    1: 'A'
}
const userB: UserIF = {
    name: "Cindy",
    3: 'B'
}


interface Item {
    [itemIndex: number]: string
}

let item: Item = ['a','b','c']

console.log(item[0]);
console.log(item[1]);









