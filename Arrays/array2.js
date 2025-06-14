//array forEach(); method 

/*

Array iteration is one of the most
important concepts that you will use in JavaScript.

Let's say we have an array of grades and 
you'd like to loop (or iterate) over every 
item in this array. 

*/

// const grades = [10,20,30,40];

// grades.forEach(function(grade){   //callback function : function which take another function as parameter
//     console.log(grade);
// });

// const fruits = ["apple", "banana", "chlli" ,"grapes"];

// fruits.forEach(function(fruit){console.log(fruit);});

//forEach == in-buid function
//function(fruit) == callback function


/*

The .forEach(callback) method allows you to run
the callback function for every item in that array.


🍅A callback is a function definition passed as an 
argument to another function.

🍪grades.forEach(insert_callback_here);

*/

//Naming variable while iterating

/*
it's always a good idea to use the 😘plural for 
the array and 😘singular for the item of the array.
*/

// const people = [ "sam", "alex"];

// people.forEach(function(person){
//     console.log(person);
// });

//return the function

// function logGrades(grades) {
//     grades.forEach(function(grade) {
//         console.log(grade);
//         return 10;//overwrite
//     });
//     return 20;
// }

// let v = logGrades(["a","b","c"]);
// console.log(v);


//

function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number){
        if(number%2 != 0){
            sum = sum +number;
        }
    });
    return sum;
}

console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2