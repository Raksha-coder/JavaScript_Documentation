//numbers💛💛💛

/*
 you can convert a number to 
a string by calling the .toString() method.
*/

let ans = 45;
console.log(ans.toString());

//NaN = not a number  --sign of a bug
//IsNaN = is not a number?


//convert string to number💓💓

//Number.parseInt(string,radix);
let str = "5";
console.log(Number.parseInt(str,10));  //global object containing parseInt function


/*
😃😃😃😃
The radix is the base of the numerical system that 
you'd like to use. For most use cases the radix 
you'd like to use is 10 which represents the way
 we count numbers in our everyday lives. 
This system is called the decimal system 

*/

let a = 10;
let b = "20";
console.log(a+b);


let c = 10;
let d = "20";
               //string converted to number
console.log(c+Number.parseInt(d,10));

