
/*
Closures are the combination of function bundled together with it’s lexical scope  
. a closure gives you access to an outer function’s scope from an inner function 
but opposite is not true. 
Closures are created every time a function is created.

Closure Scope Chain : 
    Local Scope (own scope)
    Outer Function Scope
    Global Scope
*/


if (Math.random() > 0.5) {
    var x = 1;
  } else {
    var x = 2;
  }
  //console.log(x);





//Q1 💡
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20






//Q2💡
let count = 0;
(function printCount(){
    if(count === 0){
        let count = 1;    //let is local scope , shadowing
        console.log(count);
    }
    console.log(count);  //count is still zero here
})(); // 1 0 








//Q3💡: write a function that would allow you to do this.
var addSix = createBase(6); 
//hit the inner fun,createbase function actual mai call nahi hua h yaha, it is calling it's inner function
console.log(addSix(10));  //hit the outer fun
console.log(addSix(21)); 



function createBase(x){

    return function (y){ //anonymous function
        return x + y;
    }

}


  

