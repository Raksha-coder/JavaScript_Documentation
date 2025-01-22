# JavaScript_Documentation

## Rest and Spread Operator: 
Rest : it allow a function to accept indefinite number of arguments . Spread : it is used in Array Literals , object literals, function arguments, when we want to copy any array,string and object into another array,string and object . we use apply function here if the number of spread operator is more , because it exceed the limit of function arguments.

## Call, Apply and Bind
call, apply and bind are used to manipulate "this" keyword and the context of a function. call is used to call a function with specific "this" value and the arguments which we are going to pass in a function. apply is similar as call but the only difference is how to send the argument to it, we send the array of argumrnt to it. bind is used to create a new function along with "this" value and the arguments. it does not call the function immediately , instead it return the whole function to it.

## Shallow Copy and Deep Copy
Shallow copy is done using Object.assign() and using spread operator. and it only copy the object one level deep and copy rest as referenced type. Deep copy , it copies all level of object properly. it is done using Json.stringify() , Json.Parse().
