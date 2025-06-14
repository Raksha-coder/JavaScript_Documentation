//.length is an property not inbuild function

const users = [];
const numbers = [10,2,3,4];
const arrName = ["john", "mike", "jerry", "harry" ];

// console.log(users);
// console.log(users.length);

// console.log(numbers);
// console.log(numbers.length);

// console.log(arrName);
// console.log(arrName.length);




//🌅Get element by index

// console.log(numbers[2]);  //3

//🌅Adding an element


/*
.push() will add an item to the array 
and also return the new length of the array.
*/
//  numbers.push(50);   //push is a method
//  console.log(numbers);




/*
Even though the variable numbers was defined with const,
 we were able to push new data into it.
That's because const means you can only
 assign the variable once when it's defined.
  But it doesn't mean
 the variable is immutable. Its content can change.
*/

/*
What's the benefit of declaring it as a 
const you ask? 

The benefit is that once you 
define it as an array, it will always stay as 
an array which means you can safely call array 
methods on it. However, the array content can change.
*/

const num = [];
num.push(10);
console.log(num);
num.push(33);
console.log(num);
















