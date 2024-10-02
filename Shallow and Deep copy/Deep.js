// Deep - It create a new object that is indepently of original object

const original = {name:"Abhimanyu", address:{ city:"Lucknow",country: "India"}}

const deep = JSON.parse(JSON.stringify(original))

deep.address.city= "Kolkata";
console.log(deep.address.city)
console.log(original.address.city);
