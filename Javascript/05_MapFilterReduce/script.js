let numbers = [10,20,30,40,50];



// Map: 😁
let array2 = numbers.map((val,index,actualArr) => 
(val-10) + index
);
//we are not going to use index and array.

array2.forEach(element => {
    console.log(element + " ");
});

//filter: 😁
let arr3 = numbers.filter((val,index,arr)=>{
    if(val >20){
        return val;
    }
});

console.log(arr3);
//return an array



//reduce : 😁
//find sum of an array
let arr4 = numbers.reduce((accumulator,current,index,arr)=>{
//accumulator is the result of previous computation or calculation.
//right now there is no computation at the beginning.
//so it's going to be zero 
    return accumulator + current;

},0); //initial value of accumulator

console.log(arr4);

//dry run
//acc + current
// 0 + 10 = 10
//10 + 20 = 30
//30 + 30 = 60
//60 + 40 = 100
//100 + 50 = 150
