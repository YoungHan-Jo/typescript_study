// 非同期処理方式がよく使われる
// その結果がいつ返されるか分からない
// 完了になったら結果をもらうように　callback と　これを改善したpromiseがある
// だが規模が大きくなると重ねちゃう、これをcallback hell / promise hell　という

/* callback hell
getData(function(x) {
    getMOreData (x, function (y){
        getMoreData (y, function (z){
            ...
        })
    })
})
*/

/* Promise Hell
fetch('https://example.com/api')
  .then(response => response.json())
  .then(data => fetch(`https://example.com/api/${data.id}`))
  .then(response => response.json())
  .then(data => fetch(`https://example.com/api/${data.id}/details`))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
*/

// これを解決するため出てきたasync, await

const url = "localhost:3000/api/v1/users";

const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const response2 = await fetch(url + '/1');
    const data2 = await response2.json();
    console.log(data);
    console.log(data2);
}

// こっちのほうが見やすい



// Promiseを代替するためではない、内部的にはPromiseが作動し、見える文法だけを async, awaitで表現する

const delay = (ms: number): Promise<void> => {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            console.log(`${ms} msが経ちました。`);
            resolve();
        }, ms);
    })
}

const main1a = () => {
    delay(1000)
        .then(() => {
            return delay(2000);
        })
        .then(() => {
            return Promise.resolve('end');
        })
        .then(result => {
            console.log(result);
        });
}

const main1 = async () => {
    await delay(1000);
    await delay(2000);
    const result = await Promise.resolve('end');
    console.log(result);
}
main1();


// async は　このfunctionは　await が使えると表示
// await は　非同期を待っていると表示

const func1 = async () => {
    const res = await fetch(url); // responseを待つ
    const data = await res.json(); // parse to json
}

const func2 = async () => {
    return 1;
}

console.log(func2());
// promiseState: "fulfilled"
// promiseResult: 1

const main1b = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

const myPromise = new Promise((resolve, reject) => {
    const data = fetch(url);

    if (data)
        resolve(data);
    else
        reject("error)")
})

myPromise
    .then((value) => { // success
        console.log('success');
    }).catch((error) => { // fail
        console.error('error');
    }).finally(() => {
        // ...
    })








