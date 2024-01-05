//Stack Example(primitive data type)  FILO
let firstname = "Raksha";
let copyofFirstName = firstname;
copyofFirstName = "Jaiswal";

//here the original firname haven't get chnaged and the second variable get the copy of firstname
console.log(firstname);
console.log(copyofFirstName);


//Heap (non-primitive data type => object , array, function)  FIFO

let userOne ={
    name:"ssss",
    email:"abc@gmail.com"
}

let userTwo = userOne;// it will point to reference of userOne 
userTwo.name = "changed";
console.log(userOne.name);   // changed
console.log(userTwo.name);  //changed
