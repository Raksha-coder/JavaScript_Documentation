//use in transformation of array

/*
The .map(callback) method allows you to
transform an array into another one.
 

🎨[4, 2, 5, 8] transformed to [8, 4, 10, 16]. We doubled every item in the original array.
🎨["sam", "Alex"] transformed to ["SAM", "ALEX"]. We upper cased every item in the original array.

you always get back an array 
containing the same number of items 
compared to the original array, 
but every item has most likely 
undergone some transformation.

*/

const numbers = [2,4,6,8];

const doubled = numbers.map(function(number){
    return number*2;
});

console.log(doubled);

const names = ["sam","jack","harry"];

const upperCase = names.map(function(name){
    return name.toUpperCase();
});
console.log(upperCase);















