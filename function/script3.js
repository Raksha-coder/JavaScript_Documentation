//Naming a Function

/*

Functions are actions. So their name is usually a verb. 
It should be brief, as accurate as possible and describe
what the function does,
so that someone reading the code gets an
indication of what the function does.

*/


/*
Function starting with…
🌟"show.." - show something
🌟"get…" – return a value,
🌟"calc…" – calculate something,
🌟"create…" – create something,
🌟"check…" – check something and return a boolean, etc.
*/

//Functions should be short and do exactly one thing.

function showPrimes(n){
    nxtprime:for(let i=2;i<n;i++){
        for(let j=2;j<i;j++){
            if(i%j == 0){
                continue nxtprime;
            }
        }
        console.log(i);
    }
}

showPrimes(10);


console.log("..the second way..");
let num;
function showPrime(num){
    for(let i=2;i<num;i++){
        if(!Isprime(i)){
            continue;
        }
        console.log(i);
    }
}

function Isprime(num){
    for(let j=2;j<num;j++){
        if(num %j ==0){
            return false;
        }
    }
    return true;
}

showPrime(15);

console.log("min function called...");

function min(a,b){
    // if(a < b){
    //     return a;
    // }
    // return b;

    return (a<b) ? a : b;    //ternary operator ?:
}

let x = min(3,5);
console.log(x);

let y = min(15,10);
console.log(y);

console.log("power function called..");
function pow(x,n){
    return x**n;
}

let rst = pow(4,2);
console.log(rst);



function pow2(x,n){
    let result = x;


   for(i=1;i<n;i++){
       result = result * x;
   }
   return result;

}

let ansofpow2 = pow2(5,2);
console.log(ansofpow2);
