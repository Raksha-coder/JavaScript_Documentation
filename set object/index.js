//set object == remove duplicate value from array
/*
all the items are unique
key = value;
 */

// const myArr = [1,1,5,6,5,7];

// const set = new Set(myArr);
// console.log(myArr);
// console.log(set);  //giving ans in object

// // //to convert this
// const resultArr = [...set];  //spread of set
// console.log(resultArr);



















/* ------- 🍑Methods in set object ------- */

//1.add 

// const myArr = [1,1,5,6,5,7];

// const set = new Set(myArr);

// set.add(8);
// set.add('c');
// set.add({name : "john"});
// set.add([8,8,8]);
// console.log(set);













//2. delete()


// const myArr = [1,1,5,6,5,7];

// const set = new Set(myArr);

// set.delete(6);  //any value not index
// console.log(set);











//3. clear();

// const myArr = [1,1,5,6,5,7];

// const set = new Set(myArr);

// set.clear();  //it accept no parameter and clear the whole set
// console.log(set);












//4. has();
//To check set has the desire value or not
// const myArr = [1,1,5,6,5,7];

// const set = new Set(myArr);

// console.log(set.has(6));     //like include











//5. size
// const myArr = [1,1,5,6,5,7];

// const set = new Set(myArr);

// console.log(set.size);   //length of the set




//iterate over all the value of set

const setIterate = [10,20,30,40,10];

let setI = new Set(setIterate);
console.log(setI);

for(let item of setI){
    console.log(item);
}

//key, value pair in Set
for(let [key,value] of setI.entries()){
    console.log(key + " "+value);
}
//no indexing so value and key are same

setI.forEach(function(key,value){
    console.log(key + " "+value);
});









/* spread  operator*/
let newArray = [...setI];
console.log(newArray);


/*another method instead of using spread operator */
console.log("----------------------🐥")
let ans = Array.from(setI);
console.log(ans);


















/*-------- 🍑Difference Between Array and Set ----------*/

/*  

    Array store element in contiguous memory allocation
    Array is an ordered list of object



    Set is an unordered pool of unique element,
    there is no indexing in set to access a specific element 

*/













