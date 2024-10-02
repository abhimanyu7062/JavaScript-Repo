// Promise - Promise is an object in javaScript that perform asynchronous operation 
//like data fetching and file operation.It avoid callback hell and more maintainable code
// it provide method like .then to handle the result of a fulfilled promise.
// .catch for handle error when promise is failed
// Promise.all(): Runs multiple promises in parallel and waits for all of them to finish.
// Promise.race(): Returns the result of the first promise to resolve or reject.
// Promise.allSettled(): Returns all results, regardless of whether the promises resolved or rejected.
// Promise.any(): Returns the first promise that fulfills, ignoring rejected ones.
// When to work - when handle simple asyncronous operation

const promise1 = Promise.resolve("first promise");
const promise2 = new Promise((resolve) => setTimeout (resolve,1000,'second promise'))

Promise.all([promise1,promise2])
.then((values) => {console.log(values)})
.catch((error) => {console.log(error);
})
