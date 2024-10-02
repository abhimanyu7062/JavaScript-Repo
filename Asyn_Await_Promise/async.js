//Async&Await-To handle asynchronous operation more easily, and avoid more complex promise chaining.
// How its' work - Async declare function asynchronous, and await pause the execution until the 
// promise is resolve or reject
// Benifite - Avoid callback hell, easy to debug
//When to use-When we handle multiple asynchronous function opertion that dependend on each other.
// When complex asynchronous logic 
//example
 
async function multifunction() {
    const [data1,data2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/2'),
    ])
    console.log("data1",await data1.json())
    console.log("data2",  await data2.json());
    
} 
multifunction();