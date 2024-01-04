"use strict";

//🌟this in global space
console.log(this); //global object or whindow object




//🌟this in function
// note : this keyword in strict mode give undefined or null 
// in non strict mode it give global object(also called this substitution)
function myFun(){
    console.log(this);
};

myFun();

/*
if the value of this keyword is undefined or null then it will be 
replace with globalObject only in non strict mode
*/


//this keyword value depends on how the function is called(window)
myFun();  // undefined in strict mode
window.myFun();   // this will give globalObject




//🌟this inside a object method
const obj ={
    a:10,
    b:20,
    //if we make function inside the object then we call it method
    c: function(){
            console.log(this);
    }
}

obj.c();
//o/p  => {a:10,b:20}
//this refer to the properties of the object(key value pairs)



// 🌟call apply bind methods(sharing methods or function) => if i want to share method of one object into another
//to manipulate or modify the value of this keyword we use call apply bind
const Student = {
    name:"Raksha",
    printName: function(){
        console.log(this.name);
    }
}
Student.printName();  //Raksha


const Student2 ={
    name:"mihika"  //here i want to use printName method of student1
}
//we can use the method by overriding the value of this keyword
Student.printName.call(Student2);   //mihika








// 🌟this inside arrow function
// arrow function do not have there own this keyword , they take
//the value from their lexical environment where this keyword is inclosed
//lexical ?
//lexical means how it is written inside the code(globally) , here this will behave like
// a global space

const obje = {
    a:10,
    x : ()=>{
        console.log(this);   //window object
    }
}
obje.x();




//🌟 this inside nested arrow function
const nested = {
    a:10,
    x : function(){   // the enclosing lexical context is x function here. this is behave like arrow function is not there.
            const y = ()=>{
                console.log(this);  
            }
            y();  // call the nested function
    }
}
nested.x();  // output will be {a:10, x:function}




//this inside DOM element(in html) => the value is reference to the html element
//<button onclick=alert(this)>click me</button>     o/p: dom element
//<button onclick=alert(this.tagName)>click me</button>      o/p : button
 



