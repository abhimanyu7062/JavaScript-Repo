// FILTER= filter is used to filter some value according to the condition

const num = [2,4,1,5,6,7]
const filter = num.filter((item) => {
    return item > 3
})
console.log(filter)