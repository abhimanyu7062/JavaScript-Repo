// CallBack - Callback is a function that passing function as a argument and it is executed after the 
// completioton fo outer function. it is used for handle asynchronous function

function fetchData (callBack){
    console.log("Fetching Data.....")

    setTimeout (() => {
        const data = {"id": 1, "name":"Abhi"}
console.log("data fatched") 
callBack(data)       
    },2000)
}
function processData(data) {
    console.log(`Processing data for user: ${data.name}, Age: ${data.age}`);
}

// Calling the fetchData function and passing processData as a callback
fetchData(processData);