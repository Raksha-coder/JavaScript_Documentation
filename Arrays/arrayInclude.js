/*
The array .includes(item) method is 
one of the simplest array methods as it 
takes an item rather than a callback and 
returns true when that 
item exists in the array and false otherwise.
*/

let fruits = ["apple","pinnaple","grapes","mango"];

console.log(fruits.includes("apple"));
console.log(fruits.includes("bread"));

console.log(fruits);
console.log(fruits.join(";"));
console.log(fruits.join("."));

//The array .join(glue) method returns a string of 
//the array elements separated by the glue.