let arrayOne = ["one","two","three"];
let arrayTwo = ["four","five"];

arrayOne.push(arrayTwo);  // it affect the original array
console.log(arrayOne);  
console.log(arrayOne[3][0]); 
//here in o/p : ek array ke andar dusra array aa jaega  
// concate nhi hoga proper


//lets try concat
let one = [1,2,3];
let two = [4,5];
 console.log( one.concat(two));  // combine  2 or more array and return a new array
console.log(one);   //original array does not get changed




// instead of using push and concat , we can use spread operator
let favfruits = ["apple","mango","banana"];
let favsports = ["football","basketball"];

const MergeArrays = [...favfruits, ...favsports];  // kaach ka glass
console.log(MergeArrays);





//flat => returns a new array with all sub_array elements concatenated
// into a recursively upto specific depth.

let lotsofarray = [1,2,[3,4],5,[6,7,[8,9]],10];

let openAllArray = lotsofarray.flat(Infinity);  //define depth
console.log(openAllArray);
console.log(lotsofarray);  // original array did not get affect by flat 






//find if something is array or not
console.log(Array.isArray("sometext"));
console.log(Array.isArray([1,2,3]));

//now convert anything into array using "Array.from"
console.log(Array.from("some"));
console.log(Array.from(12.5)); // did not get converted to array(we have to mention ki kisko array banana h)
console.log(Array.from(true)); // did not get converted to array



// we can use of instead of from 
// of => return a new array

let a  = 100;
let b = 200;
let c =300;
console.log(Array.of(a,b,c));
//[100,200,300] o/p



