// In js you can write string in single and double quotes
//you can use string interpolation
//`some string ${variable}`

let gameName = new String("Raksha");  //Heap => other method will not change original string

//here string is an object which gives key:value pairs
/*
    0:R
    1:a
    2:k
    3:s
    4:h
    5:a
*/
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.concat("hello"));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('a'));
console.log(gameName.substring(0,3));  //starting index, length
console.log(gameName.slice(0,4));  //start, end

let anotherstring = "    hola   ";
console.log(anotherstring.trim());   //remove the extra whitespace
console.log(anotherstring.replace('l','m'));



let somestring = "kan-ch-an";
console.log(somestring.includes("an"));
console.log(somestring.split('-'));  //converting into array 