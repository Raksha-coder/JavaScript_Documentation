//define object as constructor
//singleton object => new Object(); => it is similar as normal object

//🌟const tinderUser = new Object();

let tinderUser = {};

//add
tinderUser.id ="1";
tinderUser.name ="raksha";
tinderUser.isLoggedin = true;

console.log(tinderUser);


//nested Object

let newObject = {
    anotherObject : {
        name:"sectionGame",
        age:25
    },
    id:"2"
}

console.log(newObject.anotherObject.name);
//auctional chaining , if some property does not exist 
//then instead of error it shows undefined
console.log(newObject.anothersome?.name);








//Combine Objects 
let combine1 = {
        name1:"combine1"
}

let combine2 ={
    name2:"combine2"
}

let finalCombine = {...combine1,...combine2}; //spread operator
console.log(finalCombine);