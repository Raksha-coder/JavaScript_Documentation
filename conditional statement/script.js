//if...else
//nested if...else
//switch statement
//if elseif ladder


const grade = 25;

if(grade >= 10 && grade<20){
    console.log("passing grade");
}else if(grade >=20){
    console.log("passing grade A");
}else{
    console.log("failing grade");
}

let age =20;

function canVote(age){
    if(age >=18){
        return true;
    }
    return false;
}