//functions in js

for(let i= 0;i<5;i++){
    setTimeout(function (){
        console.log(i);
    }, i*1000);
}
//0 1 2 3 4

for(var i= 0;i<5;i++){
    setTimeout(function (){
        console.log(i);
    }, i*1000);
}

//if i use var , it will print 5 number 5 times
//because it's scope is functional scope or we can say 
//global scope.
