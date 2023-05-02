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
let myFunc5 = (x, y) => {
    return x + y;
};
console.log('myFunc5');
console.log(myFunc5(2, 3));
