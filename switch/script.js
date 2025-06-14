let num, dayofweek;

num = `4`;

switch(num){
    case `1`:
        dayofweek = "monday";
        console.log(dayofweek);
    break;
    case `2`:
        dayofweek = "tuesday";
        console.log(dayofweek);
    break;
    case `3`:
        dayofweek = "wednesday";
         console.log(dayofweek);
    break;
    case `4`:
        dayofweek = "thursday";
         console.log(dayofweek);
    break;
    case `5`:
        dayofweek = "friday";
         console.log(dayofweek);
    break;
    case `6`:
        dayofweek = "saturday";
         console.log(dayofweek);
    break;
    default :
        dayofweek = "invalid";
        console.log(dayofweek);
}

let marks = 90;
let bool = true;

switch(bool){
    case marks >80:
        console.log("distinction");
    break;
    default:
        console.log("Invalid");
}