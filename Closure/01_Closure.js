// what is Closure 
// Ans - A closure in JavaScript is a function that has access to variables from its outer scope
// (or surrounding context), even after that outer function has returned

function Outer () {
    let count = 0;
    return function inner () {
        count +=1;
        console.log(count);
    }
}
const counter = Outer();
counter();
counter();
counter();