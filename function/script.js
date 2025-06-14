/*
Quite often we need to perform a 
similar action in many places of the script.

For example,🌰 we need to show a nice-looking message when 
a visitor logs in, logs out and maybe somewhere else
*/

function showMsg(){    //declaration
    console.log("Hello there!!");
}

showMsg();  //calling
showMsg();


//🍳local variable

function fname(){
    let msg = "hey, there are you okay.";  //local variable
    console.log(msg);
}

fname();  //calling

// console.log(msg);   show error


//🍳outer variable
let nxt = "John";

function lname(){
    let greeting = "Hello " + nxt;
    console.log(greeting);
}

lname();


//🍳modify the value

let username = "john";

function modify(){
    username = "jaiswal";
    let modify = "Hello ms." + username;
    console.log(modify);
}

console.log(username); //John before the function call

modify();

console.log(username); // jaiswal, the value was modified by the function


//🍳
// let userName = "john";  //global
// function showMessage() {
//     let userName = "Bob"; // declare a local variable
  
//     let message = 'Hello, ' + userName; // Bob
//     alert(message);
//   }
  
//   // the function will create and use its own userName
//   showMessage();
  
//   alert( userName ); // John, unchanged, the function did not access the outer variable


  //calculateArea

  calculateArea(10,20);
  
  let a = calculateArea(20,50);
  console.log(`the area of second triangle is ${a}`);

  function calculateArea(length,breadth){
      let area = length * breadth;
      console.log(`the area is ${area}`);

      if(area > 500){
          console.log("Big Triangle");
      }else{
          console.log("small Triangle");
      }

      return area;
  }


  //fat arrow function



let variableName = () =>{
    console.log(`this is fat arrow function ,
     no need to write function and functionName`);
}


variableName();  //calling













