//regular object

const person = {
    firstName : "john",
    lastName : "doe"
}












//using constructor function 

function Person(firstName,lastName){
    this.fname = firstName;
    this.lname = lastName;
}

let object1Create = new Person("raksha","jaiswal"); 
console.log(object1Create.fname);

let object2Create = new Person("ray","smith"); 










//using method
function Doc(firstName,lastName){
    this.fname = firstName;
    this.lname = lastName;

    this.getFullName = function(){
        return this.fname + " " + this.lname;
    }
}

let person1 = new Doc("jai","ho");
let person2 = new Doc("aka","me");

console.log(person1.getFullName());











//what if the user not use new operator

/*🌼🌼🌼🌼🌼
function Age(age,name){

    if(!new.target){
        throw Error("cannot be called without the new keyword");
    }

    this.age;
    this.name;
}

let ObjectAge = Age(22,"rj");

*/



















//🌼🌼🌼🌼🌼
//or else we can give new keyword dynamically

function Age(age,name){

    if(!new.target){
        return new Age(age,name)
    }

    this.age = age;
    this.name = name;
}

let ObjectAge = Age(22,"rj");