//implicit and explicit conversions
//low to high
//int to long
//high to low => data loss problem

let score = "33abc";
let val = null;   //convert to number , it will give zero.
let val2 = undefined; //convert to number, it will give NaN

let valueInNumber = Number(score);
console.log(valueInNumber);    //NAN




/*
Note : 
converting all this into number
        "33" => 33
        "33abc" => NaN
        null => 0
        undefined  => NaN
        true => 1
        false => 0

*/



/*
converting to boolean

        1 => true
        "" => false
        "raksha" => true


*/











/************************ Operations ****************************/
//+ - * ** / %
// --a ++a a++ a--
// &&  || !

console.log("1" + 2 + 2);     //122   left to right
console.log(1 + 2 + "2");    // 32    left to right