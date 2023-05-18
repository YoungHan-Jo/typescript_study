function sleep(ms: number) {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(`${ms} ms 経ちました。`);
            resolve();
        }, ms);
    })
};

const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('finished')
    }, 1000);
})

async function main3() {
    console.log(promise); // result: undefined , state: pending
    await sleep(2000);    // ２秒後
    console.log(promise); // result: 'finished', state: fulfilled
}
// pending - まだ非同期処理logicが完了されてない状態
// fulfilled - 非同期処理logicが成功敵に完了 ー＞　.then() を呼ぶ
// reject - 失敗　ー＞ .catch() を呼ぶ

main3();






