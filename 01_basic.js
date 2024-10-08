//1. What is the use of the isNaN function?
// isNaN is a function that return true  when it is not a number otherwise it will return false

// 2.What are undeclared and undefined variables?
// Undefine - When we define a variable but not assign any value that is Undefine
// Undeclare- "An undeclared variable is one that has never been declared in 
// the current scope or any higher scope.
// when we use typeof of operater to get the value of an undeclare variable,
// we will face the runtime error with the return value as “undefined”.

//3. How does the this keyword work in JavaScript?
// In the global scope, this refers to the global object (e.g., window in browsers).
// In object methods, this refers to the object itself.
// In arrow functions, this is lexically bound and refers to the value of this in the outer function.
// In event handlers, this refers to the element that fired the event.

//4.  How to convert the string of any base to integer in JavaScript?
// In JavaScript, parseInt() function is used to convert the string to an integer

//5.Double(==) and Triple(===)
// Double Equals (==): you want to compare values loosely, and you don't care about the type.
// Triple Equals (===): you want to ensure both type and value are the same,
//  which helps avoid unexpected bugs caused by type coercion.

//6.
 console.log(typeof(Null));  // Undefine
 console.log(typeof(undefine)); //undefine