
//parameter
// function userName(from,text){
//     console.log(`${from} : ${text}`);
// }

// userName("Raksha","Hello");
// userName("Hi","What's up?");

function userNames(from,text="this is the text"){       //parameters under parenthesis
    from = "*" + from + "*";          //local update
    console.log(from + " : " + text);
}

let from = "raksha";
userNames(from," hello");  //arguments
userNames();              //undefined
userNames(from);
console.log(from);   //not updated from 


/*
🎐A parameter is the variable listed inside the parentheses 
in the function declaration (it’s a declaration time term)


🎐An argument is the value that is passed to the function 
when it is called (it’s a call time term).

*/

function anotherfun(){
    return " are the best" ;
}


function hello(para1,para2 = anotherfun()){
    console.log(para1 + ":" + para2);
}

hello("student"," not available");

/*
In the example above,
 anotherFunction() isn’t called at all,
 if the text parameter is provided.
*/


function parameter(text){
    if(text === undefined){
        text ="text is not givin";
    }
    console.log(text);
}


parameter("raksha raksha raksha");

//set default value to parameter in function

function firstname(count){
    let ans = count ?? "not defined"; //nullish coalescing operator
    console.log(ans);
}

firstname(0);
firstname(null);
firstname();  //undefined


//🅰️returning value

let p,q;
function sum(p,q){
    return p+q;
}

let result = sum(2,5);
console.log(result);

//example of return


let age = 25;
function checkAge(age){
    if(age >=18){
        return true;
    }else{
        return false; 
    }
}


if(checkAge(age)){
    console.log("Access Granted");
}else{
    console.log("Access not Granted");
}

//If a function does not return a value
// it is the same as if it returns undefined


function doNothing(){
        /*empty */
}

console.log(doNothing() == undefined); //true



function doNothing(){
    return;
}

console.log(doNothing() == undefined); //true

//🅱️multiple line return

/*
If we want the returned expression to wrap across 
multiple lines, we should start it at the same line 
as return. 
Or at least put the opening parentheses there as follows:
*/

function say(){
    let some = "hello ,",long = "raksha ",expression = "something ";
    return(
        some + long + expression
        + "or" + " nothing here"
    )
}

let answer = say();
console.log(answer);
























