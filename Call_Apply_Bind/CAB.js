// call(): Immediately invokes the function and allows you to pass arguments one by one.
// apply(): Immediately invokes the function but expects an array of arguments.
// bind(): Does not invoke the function immediately but returns a new function 
// with this permanently bound to the specified value.

// Common Example

const product = { price:80,
     totalCalculation: function (tax,disscount) {
         return this.price + this.price*tax-disscount
        } }

const  anotherProduct =  {price: 200};

//call
console.log(product.totalCalculation.call(anotherProduct,0.1,20));
//apply
console.log(product.totalCalculation.apply(anotherProduct,[.2,10]));
// bind
const boundCalculate = product.totalCalculation.bind(anotherProduct,0.1);
console.log(boundCalculate(20));