//Rest Operator - It is used to collect multiple elements into single array
// Uses = 1. Handling Variable number of function argument(rest parameter)
// 2. Destructing array or object

const sumofNumber = (...number) => {
 return number.reduce((acc,curr) => acc +curr)
}
console.log(sumofNumber(1,2,3,4,5))

// Destructring Array
const [first,second, ...restnumber] = [1,2,3,4,5,55,43]
console.log(first);
console.log(second);

console.log(...restnumber);

