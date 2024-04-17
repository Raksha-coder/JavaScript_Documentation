//callback
//function which pass as an argument to another function

function name(name)
{
    console.log("hello"  + name);
}


function greet(callback,name){
        callback(name);
}

greet(name,"raksha");

//we actually use callbacks on map,filter, reduce ,settimeout,eventListeners
document.addEventListener("click",function(params){  

});








  