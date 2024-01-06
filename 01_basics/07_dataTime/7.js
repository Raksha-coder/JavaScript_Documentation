let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString()); // date
console.log(mydate.toLocaleString());  //date and time
console.log(typeof mydate);    //object

//month zero se start hota h js mai
//new Date(year,month,date);
let newdate = new Date(2024,0,11);
console.log(newdate.toDateString());
console.log(newdate.toLocaleString());  



let anotherdate = new Date("2023-01-12");
console.log(anotherdate.toLocaleString());



//timestamps
let timestamp = Date.now();
console.log(timestamp);    //miliseconds,  it had given me only time , not date
//if i want to convert miliseconds into seconds
console.log(Math.floor(Date.now()/1000));





//abstract only date months year 
let seedate = new Date();
console.log(seedate.getDate());
console.log(seedate.getMonth());
console.log(seedate.getMonth() +1); //so that month start from 1 not from 0
console.log(seedate.getFullYear());
console.log(seedate.getTime());  //miliseconds time



//customize the output
let datesee = new Date();
console.log(datesee.toLocaleString('default',{
    weekday:'long'
}));