const values = [1,2,3,4,5];

let foreachValue = values.forEach((val,index)=>{
    return  val;
})

let mapValue = values.map((val)=>{
    return val*2;
})

//console.log(foreachValue,mapValue);






//some questions
let students = [
    {name:"Piyush",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"Kaushal",rollNumber:6,marks:35},
    {name:"Advet",rollNumber:10,marks:35},
    {name:"Raksha",rollNumber:30,marks:40},
];


//que 1 🅰️: return only name of students in capital.
//map filter reduce

let studentNames = students.map((std)=>std.name.toUpperCase());
//console.log(studentNames);

//using traditional for loop
let forNames = [];
for (let index = 0; index < students.length; index++) {
    forNames.push(students[index].name.toUpperCase());    
}
//console.log(forNames);


//que 2 🅱️: return only details of student who score more than 60 marks

let studentWhoScore60 = students.filter((std) =>{
    if(std.marks > 60){
        return std;
    }
})

console.log(studentWhoScore60);



//que 3 🅾️: more than 60 marks and rollnumber greater than 15;

let studentWith60And = students.filter((std) => (std.marks>60 && std.rollNumber>15));
console.log(studentWith60And);


//que 4 🅾️: sum of marks of all students

let sumOfMarks = students.reduce((accum,current,i,arr)=> {
    return accum+current.marks
},0);

let sumOfMarkss = students.reduce((accum,current)=>accum+current.marks,0); //short way to code
console.log(sumOfMarkss);


//que 5 🅾️:return only names of the student who score more than 60;

let moreThan60 = students.filter((std)=> std.marks>60).map((val) => val.name);
//first it will give array of object that is std and then names of student

console.log(moreThan60);




//que 6 🅾️: return total marks for students with greater than 60
//after 20marks have been added to those who scored less than 60.

//i want the whole value of array so im using map instead of filter
let query = students.map((std)=>{
     if(std.marks < 60){
        std.marks += 20;
     };

     return std;
})
.filter((std)=> std.marks>50)
.reduce((accum,curr)=> accum+curr.marks,0);

console.log(query);




