//.concat()
// let myarr = [1,2,3];
// console.log(myarr.concat(4,5,6));









//.push() = insert the element
// let names = ["sam","john"];
// names.push("harry");
// console.log(names);

//.pop() = remove last element from array
// let num = [10,20,30,1000];
// num.pop();
// console.log(num);
//🌰stack concept == push,pop












//.shift() = remove first element from array
// let Arr = [1,2,3,4,5];
// Arr.shift();
// Arr.shift(2);
// console.log(Arr);

//.unshift() = insert element at bignning
// let character = ['a','b','c'];
// character.unshift('1');
// character.unshift('2','3','4');
// console.log(character);

//🌰queue concept == shift , unshift












/*
QUEUE
start,end ==  unshift , pop (insert,delete)
end,start == push , shift(insert,delete)
*/









//.slice() = it takes the particular part from the array and print a new array

// let a = [1,2,3,4,5,6];
// let ans = a.slice(1,3);
// console.log(ans);
// console.log(a);



//.splice() = it replace the element from array(remove and insert)

// let b = [1,2,3,4,5];
// b.splice(1,3,'a','b','c','d','e');    //indexStart counter elementstoinsert
// console.log(b);


















//.reverse()
// let c = ['r','a','k','s','h','a'];
// c.reverse();
// console.log(c);


//.sort()
// console.log("----------");
// let d = [8,9,2,6,4,0];
// d = ['a','v','b'];
// d.sort();
// console.log(d);
/*sort also sort the string as well as number */



















//.indexof()
//.lastIndexof()
// let e = ['a','b','c','a','b','a'];
// let result = e.indexOf('a');
// let result2 = e.lastIndexOf('a');
// console.log(result);
// console.log(result2);





















//.every(callback)  
/*
method that allows you to check 
if every element of an array 
pass a test in a shorter and cleaner way.
*/

let everyArr = [2,4,8,6,10];

let every = everyArr.every((item) =>{
    return (item%2 == 0);
});
console.log(every);




















/*
.some(callbakc)
method to check if 
at least one element in the array 
passes a test.
*/

let arrSome = [2,10,5,7,9 ];

let some = arrSome.some(function(item){
    return (item%2 ==0);
});
console.log(some);


