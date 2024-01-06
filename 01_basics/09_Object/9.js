//we can define objects as  literals ya constructor
//singleton => literal ke time pe singleton nahi banta h 
//singleton => constructor ke time pe singleton banega



//🌟Object Literals

//Symbols are often used to create unique keys for object properties, preventing naming conflicts.
const id = Symbol("key");

const user = {
    [id]:"1",
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    age:22,
    email:"abc@gmail.com",
    isLoggedIn :true,
    LastLoginDay : ["mon","tue"]
}

console.log(user.email);
console.log(user["age"]);
console.log(user["full name"]);
console.log(user[id]); 
console.log(typeof user[id]);   //string


user.age = 25; 
//if you want that , nobody change the value of object , then
// you can freeze that property
//🌟Object.freeze(user);
user.age = 0; 
console.log(user.age);


//add function into object
user.greeting = function(){
    console.log("GoodMorning");
}
console.log(user.greeting());


