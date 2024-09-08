// 1.What is Hoisting ?
// When we declare Variable and Function at the top of the scope that is called Hoisting 

// 2.Why Hoisting is needed?
// Hoisting comes from early versions of JavaScript to avoid unexpected errors, especially
//  when dealing with asynchronous code or function calls spread across large blocks

// 3.How Hoisting is work?
// Creation Phase: It scans the entire code and registers variable and
//  function declarations into memory.
// Execution Phase: The code runs line by line, and the registered declarations are executed.

// 4.Variable Hoisting
var number;
console.log(number);
number = 10;

// 5.Function Hoisting
Hoisting();
function Hoisting () {
    console.log("I like Hoisting")
}