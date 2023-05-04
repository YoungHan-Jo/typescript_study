"use strict";
console.log('Hello Typescript!!');
function myFunc1(x, y) {
    return x + y;
}
console.log(myFunc1(1, 3));
let myFunc2 = function (x, y) {
    return x + y;
};
console.log('myFunc2: ', myFunc2(2, 3));
let myFunc3 = (x, y) => {
    return x + y;
};
console.log('myFunc3: ', myFunc3(4, 5));
let myFunc4;
myFunc4 = function (x, y) {
    return x + y;
};
console.log('myfunc4');
console.log(myFunc4(1, 2));
let pracfunc4;
pracfunc4 = (x, y) => {
    return x + y;
};
console.log('pracfunc4');
console.log(pracfunc4(1, 2));
let myFunc5 = (x, y) => {
    return x + y;
};
console.log('myFunc5');
console.log(myFunc5(2, 3));
let pracfunc5 = (x, y) => {
    return x + y;
};
let myFunc6 = (x, y) => {
    return x + y;
};
console.log('myfunc6:', myFunc6(1, 2));
let pracFunc6;
pracFunc6 = (x, y) => {
    return x + y;
};
console.log('pracfunc6:', pracFunc6(2, 3));
let myFunc7 = (x, y) => {
    return x + y;
};
console.log('myfunc7:', myFunc7(1, 2));
let pracFunc7;
pracFunc7 = (x, y) => {
    return x + y;
};
console.log('pracFunc7:', pracFunc7(2, 3));
let isBoolean;
isBoolean = true;
let isDone = false;
let num;
let integer = 6;
let float = 3.14;
let nan = NaN;
function plus(num1, num2) {
    return num1 + num2;
}
console.log('plusfunction:', plus(1, 2));
let red = 'Red';
let green = "Green";
let yourColor = 'Your color is' + green;
let myColor = `My color is ${red}.`;
function strings(str1, str2) {
    return str1 + ' and ' + str2;
}
console.log('strings:', strings(red, green));
// ========================================================
// Array
let fruits = ['Apple', 'Banana', 'Mango'];
// let fruits: Array<string> = ['Apple', 'Banana', 'Mango'];
// 모든 데이터 타입 any[]
let someArr = [0, 1, {}, [], 'str', false];
// 특정 데이터 타입만 아이테믕로 사용 union
let selects = [1, 2, 3, 'one', 'two'];
function getArr(...args) {
    return args;
}
let a = getArr(1, 2, 3, 4, 5, 7);
console.log('a:', a);
//======================================
// tuple, 사이즈가 정해전 배열, 타입순서 맞아야함
let rgbColor = [255, 255, 0];
let x;
x = ['hello', 0];
let user = [1234, 'hello', true];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
// =============================================
// enum
var Avengers;
(function (Avengers) {
    Avengers[Avengers["SpiderMan"] = 0] = "SpiderMan";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Hulk"] = 2] = "Hulk";
})(Avengers || (Avengers = {}));
let hero = Avengers.SpiderMan;
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let c;
c = Color.BLUE;
let d = Color.RED;
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week.Sun);
console.log(Week['Sun']);
console.log(Week[0]);
let weekName = Week[0];
console.log(weekName);
// =========================================
// Object
let obj = {};
let arr = [];
let func = function () { };
let nullValue = null;
let date = new Date();
// 객체 타입 선언시 가독성이 안좋음
let userA;
userA = {
    name: 'John',
    age: 32
};
let iuserA = {
    name: "A",
    age: 123
};
let IUser = {
    name: "B",
    age: 40
};
// ================================
// any type
let any = 123;
any = 'hello world!';
any = {};
any = null;
let list = [1, true, "free"];
console.log('list:', list);
list[1] = 100;
console.log('list:', list);
// =================================
// Unknown
let any1 = 123;
let un = 123;
let value = 10;
console.log(value.length);
let valueNum = 10;
let valueStr = 'test';
// console.log(valueNum.length)
// unknown은 컴파일 에러 나옴
// typeof 를 이용하여 풀어낼 수 있다.
// 손이 좀 더 가지만 any 타입에 비해 안정적으로 개발 할 수 있다.
if (typeof valueStr === "string") {
    console.log(valueStr.length);
}
// ==================================
// void type
function hello(n) {
    let sum = n + 1;
}
const hi = hello(1);
console.log('hi:', hi);
