//declaring and initializing array

let marks = new Array(100,200,20,45,36);
console.log(marks);
console.log(marks.length);

let num = Array(10,20,30,40);
console.log(num);
console.log(num.length);

let names = [ " akansha","John","alka"];
console.log(names);
console.log(names.length);
console.log(names[1]);
names[1] = "Raj";
console.log(names);

//initializing array using length

marks = new Array(12);
console.log(marks);
console.log("length is :",marks.length);



num = Array(10);
console.log(num);
console.log("length of num is : ",num.length);


names = [];
names.length = 22;
console.log(names);
console.log("the length of names are :",names.length);

