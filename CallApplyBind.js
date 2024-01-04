//🌟call => if i want to use the method of one object into another object 
//then i use call , it override the this keyword . 

const obj1 = {
    name:"raksha0"
}

const obj2 = {
    name : "jaiswal"
}

//generally if we want to use function on multiple objec we don't write it 
//inside the object.
let printName = function(state,favFood){
    console.log(this.name + " , " + state + " ," + favFood);
}


//call function for object using call method
printName.call(obj1,"maharashtra","mango");
printName.call(obj2,"delhi","apple");




//🌟apply
//the only difference between call and apply 
// is that how we pass the arguments
// the 2nd argument is an array of arguments
printName.apply(obj1,["maharashtra","mango"]);
printName.apply(obj2,["delhi","apple"]);



//🌟Bind 
//bind method looks exactly as the call Method but the
//only difference is that instead of directly calling the method
//the bind method bind the printName method with the object ,
// and returns the copy of that method

const printMyName = printName.bind(obj1,"sss","mango");
printMyName();

//it does not directly call the method