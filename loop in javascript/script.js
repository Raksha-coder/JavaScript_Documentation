/*
the task which we are doing again n again

😄while
😄for
😄do-while
*/

/*
🍧labeled statement   - goto label
🍧continue statement  - skip the value
🍧break statement   - after found the ans it come out of the loop
*/




//for  == entry control loop

for(let i = 1; i<=10;i++){
    console.log(i);
}
console.log("loop terminated");

//while  == entry control loop
let j=1;
while(j<=10){
    console.log(j);
    j++;
}
console.log(`loop terminated..`);

//do-while  == exit control loop

let k=1;
do{
    console.log(k);
    k++;
}while(k<=5);

console.log(`loop terminated..`);


//break
console.log("break statement executed...");
for(let p=1;p<=20;p++){
    console.log(p);
    if(p==4){
        break;
    }
}

//continue
console.log("continue statement executed...");
for(let q=1;q<=20;q++){
    if(q==4){
        continue;  
    }
    console.log(q);
}

//labeled == giving label to a particular loop
console.log("label...");

outerloop : for(let t=1;t<=5;t++){
    for(let r=t;r<=5;r++){
        if(r==3){
            break outerloop;  //to break the outerloop with innerloop
        }
        console.log(r);
    }
}

console.log("...without label..");
for(let t=1;t<=5;t++){
    for(let r=t;r<=5;r++){
        if(r==3){
            break;  //to break the outerloop with innerloop
        }
        console.log(r);
    }
}








