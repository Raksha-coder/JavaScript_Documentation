
let names = ["sam","harry","potter","john"];

let find = names.find(function(name){
    return name === "harry";
});
console.log(find);   //new array 


/*

When you call the .find(callback) method on an array,
you will get back the first item that matches the 
condition that you specify.
If no items were found, you will get back undefined.

*/

let numbers = [9, 5, 14, 3, 11];

let firstNumberAboveTen = numbers.find(function(number) {
    return number > 10;
});
console.log(firstNumberAboveTen); // 14
//it will not give 11 as we get in filter

//.filter() vs .find()

/*

💥The .filter() method always returns an array.
💥The .find() method returns the first array item 
that matches the callback function or undefined.

*/


let nums = [9, 5, 14, 3, 11];

// filter() ALWAYS returns an array
let fil = nums.filter(function(num) {
    return num >= 12;
}); // [14]
console.log(fil);
// .find() returns the first match or undefined
let fid = nums.find(function(num) {
    return num >= 12;
}); // 14
console.log(fid);