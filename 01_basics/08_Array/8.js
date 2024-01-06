//array is a collection of similar type of data but in js we can store 
//multiple type of data
//we can store multiple values in an array.
//we can access the values of array using index.
// js array are resizable means it is not of fixed size


//shallow copy => shallow copy of an object is a copy whose properties share the 
//same references (like heap)
//deep copy => deep copy of an object is a copy whose properties does nor share the 
//same references (like stack)


//array create shallow copy not deep copy


const array = [1,2,3,4,5];
const newarr = new Array(1,2,3,4,5);   //type is object

//we can perform push pop shift unshift
array.push(9);  //add
array.pop();   //remove

console.log(array.includes(3));
console.log(array.indexOf(3));


//join adds all the array element to a new array as a string
let newarrs = array.join();
console.log(newarrs);
console.log(typeof newarrs);





//slice and splice 
const OriginalArray = [1,2,3,4,5];

console.log( OriginalArray.slice(1,3));  //startindex, endindex-1;
//it do not affect the original array
console.log("A " + OriginalArray);


console.log(OriginalArray.splice(1,3));   
//startindex, length , it changes the original array
console.log("B " + OriginalArray);





