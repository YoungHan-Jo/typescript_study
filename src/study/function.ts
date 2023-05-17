function myFunc1(x: number, y: number): number {
    return x + y;
}

let myFunc2 = function (x: number, y: number): number {
    return x + y;
}

let myFunc3 = (x:number, y:number): number => {
    return x + y;
}

console.log(myFunc1(2,3));
console.log(myFunc2(2,3));
console.log(myFunc3(2,3));

