// Spread Operator - It spread the element of array and function
 // Uses- Copy and merge element
 //Copy
 const person = { "Name": "Abhimanyu", "Age": 27}
 const person2= {...person}  //Shallow Copy
 console.log(person2)
 //copy and adding new value
 const arr = [1, 2, 3];
const newArr = [...arr, 4, 5]
console.log(newArr)
//Merge
const p1= {"companyName": "Lti"}
const p2 = {"salary": "40k"}
const user = {...p1, ...p2}
console.log(user);

const address = { city: 'New York', country: 'USA' };
const users = { ...person, ...address };
console.log(users);