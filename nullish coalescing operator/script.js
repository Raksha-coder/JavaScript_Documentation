//nullish coalescing operator ??


//example
// a ?? b
// if a is defined , then  a
//if  a isn't defined, then  b

let a,b;

b = "jaiswal";

result = (a !== null && a !== undefined) ? a : b;
console.log(result);

//if some how our value of a is not there then print b

let user;

console.log(user ?? "anonymous");

let sname = "hello";
console.log(sname ?? "nice");


let firstName = null;
let lastName = null;
let nickName = "John";
//show the first defined value
console.log(firstName ?? lastName ?? nickName ?? "data is not available");



/*
|| returns the first truthy value.
?? returns the first defined value.


we can use ||(or) instead of ?? , they both work similar
*/

let petName1 = null;
let perName2 = null;
let petName3 = "twinkle";

console.log(petName1 || perName2 || petName3 || "not defined");



let height = 0;

console.log(height || "100");  //100
console.log(height ?? "100");  //0 height is not null or undefined so it is giving value 0

/*
In practice, the zero height is often a valid value,
 that shouldn’t be replaced
 with the default. So ?? does just the right thing.
*/


let height1 = 2;
let width1 = null;

let area = (height1 ?? 10) * (width1 ?? 5);
console.log("the area is :" + area);