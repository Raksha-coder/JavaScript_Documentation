/*
A common array method is the .filter() method.
When you call this method on an array, you will
get back another array that contains some of the
items from the original array,
based on the condition you specify. 
*/

let numbers = [9,8,10,12,5];

let filterArray = numbers.filter(function(number){
    return number >=10;
});

console.log(filterArray);

//
let years = [2000, 2008, 2020, 2023];

let result = years.filter(function(year) {
    return year >= 2010;
});

console.log(result);