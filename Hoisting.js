/*
🌟What is Hoisting?
the process where the interpreter  move the declaration of functions, 
variables, classes, or imports to the top of their scope, prior to execution of the code

*/


getName();       //print the function
console.log(x);  //undefined


let x = 7;   // if i remove this, now it will show error instead of undefined

function getName(){
    console.log("Namaste");
}



//🌟note : even before the code starts executing, memory is allocated to each variable and functions.




anotherFun();   //undefined
//🌟in arrow function, it will behave like a variable
let anotherFun = () =>{
    console.log("arrow function will show error while performing hoisting");
    console.log("it is considering this function as varibale(undefined)");
}
