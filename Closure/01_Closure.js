// what is Closure
//Ans- a closure happens when an inner function has access to the variables of its outer function, even after the outer function has finished executing.
const e=10;
function sum (a){
    return function (b){
        return function(c){
            return function(d){
                return a+b+c+d+e;
            }
        }
    }
}
console.log(sum(1)(2)(3)(4)); // 20
