function myFunc1(x: number, y: number): number {
    return x + y;
}

let myFunc2 = function (x: number, y: number): number {
    return x + y;
}

let myFunc3 = (x: number, y: number): number => {
    return x + y;
}

console.log(myFunc1(2, 3));
console.log(myFunc2(2, 3));
console.log(myFunc3(2, 3));


// call signature
let myFunc4: (arg1: number, arg2: number) => number;
myFunc4 = (x, y) => {
    return x + y;
}
console.log('myfunc4',myFunc4(4, 1));

// (arg1: number, arg2: number) => number がfunctionのタイプを定義
let myFunc5: (arg1: number, arg2: number) => number 
                                     = (x,y) => {return x + y;}

console.log('myfunc5',myFunc5(5, 1));

// literalでfunctionタイプを指定
type Add1 = (x: number, y: number) => number;
let myFunc6: Add1 = (x,y) => {return x + y}

console.log('myfunc6',myFunc6(6, 1));
// interfaceでfunctionタイプを指定
interface Add2{
    (x: number, y:number): number;
}

let myFunc7: Add2 = (x,y) => {return x + y}
console.log('myfunc7',myFunc7(7, 1));


// argument
// 選択的なargument '?'
function sum(a: number, b?: number): number {
    // b?: number は b:number | undifined と同じ
    // return typeof b === 'number'? a + b: a;
    return a + (b ?? 0);
}

console.log(sum(1));
console.log(sum(1,2));

// argument init
function sumInit(a: number, b = 100): number{
    return a + b;
}
console.log(sumInit(10))
console.log(sumInit(10,20))


// argument rest
function sumRest(a: number, ...nums: number[]): number{
    let sum = a;
    nums.forEach(element => {
        sum += element;
    });

    return sum;
}

console.log(sumRest(1,2,3,4,5))


// named parameter
// agrumentの数が多いとき容易に使える
function getText({name, age=15, language}: {name: string, age?: number; language: string}):string{
    const ageText = age >= 35 ? 'senior' : 'junior';
    return `name: ${name}, age: ${ageText}, language: ${language}`;
}

console.log(getText({name: 'marco', age: 35, language: 'eng'}));

// この状態に作成して　ｃtrl + . 押して　named parameterに自動変換できる
function getText1(name: string, age = 15, language?: string): string {
    return 'hello';
}

console.log();
// callback function
const logging = function (s: string) {
    console.log(s)
}

const init = (callback: (arg: string) => void) => {
    console.log('---callback start---')
    callback('yes!')
    console.log('---callback end---')
}

init(logging);


const calc = (value: number, cb: (arg: number) => void) => {

    const add = (a: number, b: number) => a + b;
    
    function mul(a: number, b: number) {
        return a * b;
    }

    let result = mul(add(3,4),value);
    cb(result);
}

calc(3, (output) => console.log(output));

const calc2 = (value: number, cb: (arg: number) => number) => {
    const sum = (a: number, b: number) => a + b;
    const mul = (a: number, b: number) => a * b;

    let result = mul(sum(3,4),value)
    return cb(result);
}

let calc2Result = calc2(2,(result)=>result*2)
console.log(calc2Result)

console.log();
// high order function
const add = (a: number) => {
    return (b: number) => {
        return a + b;
    }
}

console.log(add(3)(2));

const first = add(3);
console.log(first(2))


// 明示的this
interface Cat{
    name: string;
}

const cat: Cat= {
    name: "Lucy"
}

function catFunction(this: Cat, greeting: string){
    console.log(`${greeting} ${this.name}`);    
}

catFunction.call(cat, 'hello!');

console.log();
console.log('overloading');
// overloading

function addOL(s: string, b: string): string; // 宣言
function addOL(s: number, b: number): number; // 宣言
function addOL(a: any, b: any): any{ // 実行部
    return a + b;
}

console.log(addOL('hello ','world!'))
console.log(addOL(2,3))

interface UserInterface2{
    name: string;
    age: number;
}

// function join(name: string, age: number | string): User | string{...}
// User or string 何を返すか分からない
function join(name: string, age: number): UserInterface2;
function join(name: string, age: string): string;
function join(name: any, age: any): any{
    if(typeof age === 'number'){
        return {name,age};
    } else{
        return '年齢は数字で入力してください。'
    }
}

console.log(join("tom",23))
console.log(join("tom",'23'))

function printLog(a: number): void;
function printLog(a: string): void;
function printLog(a: number, b: string): void;
function printLog(a: string, b: number): void;

function printLog(a: any, b?: any): void{
    console.log(a,b);
}

printLog(1)
printLog('2')
printLog(1,'2')
printLog('1',2)