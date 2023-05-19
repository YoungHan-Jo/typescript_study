// promise chaining
// いくつの非同期作業を順番的に

const doSomething = (arg: any) => {
    return new Promise<number>((resolve, reject) => {
        resolve(arg);
    })
}

doSomething(100)
    .then(value1 => {
        if (typeof value1 !== 'number')
            throw new Error('数字じゃありません。')
        return value1 + 50; // 150
    })
    .then(value2 => {
        return value2 + 50; // 200
    })
    .then(value3 => {
        console.log(value3); // 200
    })
    .catch(err => {
        console.log(err);
    })

// to go .catch(err)
doSomething('100')
    .then(value1 => {
        if (typeof value1 !== 'number')
            throw new Error('数字じゃありません。') // -> .catch に移動
        return value1 + 50;
    })
    .then(value2 => {
        return value2 + 50;
    })
    .then(value3 => {
        console.log(value3);
    })
    .catch(err => {
        console.log(err);
    })


