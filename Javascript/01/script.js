var today = new Date(); // i am getting time also.
var day = today.getDay();

console.log(today);
console.log(day); // index number of monday =>1
//sunday represent as zero

var dayList = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//0 1 2 3 4 5 6

var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

console.log(hr);

//converting the hours into am and pm accordingly.
var hours;
if(hr >12){
    hours = hr-12 + "PM";

}else{
    hours = hr + "AM";
}

//check special cases
if(hr == 0 && hours.includes("PM")){
    if(min == 0 && sec == 0){
        hours = "Noon";
    }
}

if(hr == 0 && hours.includes("AM")){
    if(min == 0 && sec == 0){
        hours = "MidNight";
    }
}

console.log("Today is :" + dayList[day]);  //monday
console.log("Current Time is :" + hours + ":" + min + ":" + sec);