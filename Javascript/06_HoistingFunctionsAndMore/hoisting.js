//in function, the function body is 
//store in execution context 

name(); //calling before declaration of function
//output : Raksha
function name(){
    console.log("Raksha");
}

console.log(val);  //undefined
var val = 10;
//if i would use let then it will through error
//let also give undefined but that is in temporal dead zone.


//Q1

var x = 21;

var fum = function(){
    console.log(x);
    var x = 20;
};

fum();   //undefined because of execution context
//pehle fum function ka alag se execution code banega and wo execute hoga then
//wo call stack ke hat ke then ending mai global wale var pe aaega.
console.log(x); //21

