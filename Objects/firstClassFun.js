//function in variable
//function as argument == callback


let fun1 = function(){
    return "hello"
}

function greetings(name,greet){
    console.log(name + greet())
}

greetings("rahul ",fun1)


//higher order functions  == function return function

function promotion(designation){
    if(designation == "manager"){
        return function(experience){
            console.log("promotion for "+ designation + " with experience "+experience+" is manager");
        }
    }else{
        return function(experience){
            console.log("promotion for "+ designation + " with experience "+experience + " is based on experience");
        }
    }

}

// var result = promotion("manager"); // got return value
// result(5);

promotion("manager")(5)  



