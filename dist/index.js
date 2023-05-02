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
