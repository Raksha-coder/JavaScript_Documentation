//Que 1 🅰️: function declaration

function Square(num) {
    return num*num;
}





//que 2 🅱️: Function expression
//when u store an function inside a variable
const square = function(num){
    return num*num;
};

console.log(square(5));





//que 3🅾️ : What are First Class Functions?
//when a function is treated like a variable is called
//first class function

const sum = function(num){
    return num+num;
}

const anotherFunction = function(fn) //fn is treated as variable here.
{
    console.log("the sum is : " + fn(5)); //fn calling 
};

anotherFunction(sum);




//que 4🅾️ : What is IIFE?
//immediately invoke function expression.
//a function that runs the moment it is invoked 
//or called in the JavaScript event loop
(function sque(num){
    console.log(num*num);
})(10);
//yaha bas paranthesis ka use kiya h () and function ko wahi call kar diya h.

//🆘More Questions

(function (x){

        return (function(y){
            console.log(x);  //1 
        })(2);


})(1);

//note : inner child function go to the parent to ask for x.
//it happens in closure.