/*
🌟What is Closure?
A closure is the combination of a function 
bundled together with its lexical environment(surrounding state).
in other words, a closure gives you access to an outer  function scope
from an inner function.

*/

function x(){   //closure
    let a = 17;
    function y(){
        console.log(a);
    }
    y();
}

x();




function x1(){   //closure
    let a = 17;
    function y1(){
        console.log(a);
    }
    a = 100;        //y1 is refering to the memory of a 
    return y1;
}

let z  = x1();
z();







function newfun(){    //closure
    let a = 100;
    function x(){    //closure
        let b =200;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}

newfun();



/*

🌟Uses Of Closures:
- Module Design Patterns
- Currying
- Functions like once
- memoize
- maintaining state in async world
- setTimeouts
- Iterators
- and many more

*/
