//Reduce = reduce is used to reduce item in a list eg sum of item or
// it uses accumulator to store previous value and current value 

const num = [1,3,45,6,5]
const reduce = num.reduce((acc,curr,i,arr) =>  acc+curr)
console.log(reduce)