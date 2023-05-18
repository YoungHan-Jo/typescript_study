import { readFile } from "fs";


// promise
// const promise = new Promise(callback function);
// new Promise((resolve, reject) => {...});

const numPromise: Promise<number> = new Promise<number>((resolve, reject) => {
    // fail -> reject('error');
    // success -> resolve('return data');
})


const readFilePromise = (filename: string): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        readFile(filename, (error: any, buffer: Buffer) => {
            if (error)
                reject(error);
            else
                resolve(buffer.toString());
        })
    });
}


readFilePromise('text.txt')
    .then((content:string) =>{
        console.log('first then');
        console.log(content);
        return readFilePromise('sample.txt')
    })
    .then((content: string) => {
        console.log('second then');
        console.log(content);
        return readFilePromise('nofile') // file doesn't exist, go to .catch()
    })
    .then((content: string) => { // ignore
        console.log('third then');
        console.log(content);
    })
    .catch((err) => {
        console.log("error", err.message)
    })
    .finally(()=>{
        console.log('finished')
    })

