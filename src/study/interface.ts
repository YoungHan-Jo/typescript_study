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
enum Gender{
    Male,
    Female
}
interface User {
    name: string;
    age: number;
    gender: Gender;
    readonly birthday: number;
}

let user: User ={
    name: "Jack",
    age: 20,
    gender: Gender.Male,
    birthday: 20030101
}

// user.birthday = 20001010; // read only

console.log(user);


// interface　合わせ
interface FullName{
    firstName: string;
    lastName: string;
}

interface FullName{
    middleName: string;
}

const fullName: FullName ={
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

interface Address{
    address: string;
}

interface User extends Developer,Address {}

let userA: User = {
    name: "",
    age: 0,
    gender: Gender.Male,
    birthday: 0,
    skill: "",
    address: ""
}


// call signature






