//🔮spread operator (...)
//example 1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]


//example 2
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }


//example 3
function multiply(num1,num2){
    console.log(num1 + num2);
}
var arr = [4,5];

multiply(...arr);   
//apne aap ek ek value parameters ko pass hote rahegi
// 4 = num1
// 5 = num2






//🔮rest operator (...)
function multiply(...nums){   //jab parameter mai use kiya so it's called rest operator
    console.log(nums);    //it gives array
    console.log(nums[0] * nums[1]); //20
}
var arr = [4,5];

multiply(...arr); //spread operator passing as argument
//output : [4,5]







//🆚QUESTIONS 


// const fn = (a,...nums,x,y) =>{
//     console.log(x,y);
// };
//fn(5,6,7,8);

//correct way
const fns = (a,x,y,...nums) =>{
    console.log(x,y,nums);
};
fns(5,6,7,8,5,4,2,1);

//error : rest parameter should be the last parameter.








