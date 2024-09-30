//Shallow Copy-It create a new object and copies the refrence of  the nested object not actual object , 
// so changes will afftted in   original copy also.

const person = [{name:"Abhimany", city: "Kolkata",country:"India"},
                {name: "Rajnish", city: "Indore"}
]
const shallowCopy = [...person]

shallowCopy[0].city= "Punjab";
console.log(shallowCopy[0].city); //punjab
console.log(person[0].city)   // punjab

