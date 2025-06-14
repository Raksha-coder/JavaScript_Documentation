let marks = new Array(100,200,300,400);
//by loop
let TotalMarks = 0;
for(i = 0;i<marks.length;i++){
    console.log(marks[i]);
    TotalMarks += marks[i];
}
console.log(TotalMarks);

//by using forEach function
let arrays = [11,20,30];

arrays.forEach(function(array){
    console.log(array);
});


//fat arrow function and using map function
//transformation of array == map
let greetings = new Array("hi","hello","bonzur","Holla amigo");

greetings.map((greeting) =>{
    console.log(greeting + " nope");
});

let nums = [2,4,5,8];
//multiply by 2
nums.forEach((num,index) =>{
    nums[index] = nums[index]*2;
});

console.log("array is :",nums);


//no need to write index in map
let nums2 = [1,2,3,4];

nums2 = nums2.map((num)=>{
    return num*2;
});

console.log("nums2 is :",nums2);







