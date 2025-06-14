
const rahul = {
    name : "rahul",
    profession : "Teacher",
    hobbies :["football","basketball"],
    bio : function(){
        console.log(`Hi! ${rahul.name}, your profession is ${rahul.profession}`)
    },
    age : 20
       
    
};

//insert
rahul.id = 22;

//delete
delete rahul.age



var hobbie = "hobbies"
//console
console.log(rahul)
console.log(rahul["name"] + " "+ rahul.bio())

console.log(rahul["hobbies"])
console.log(rahul[hobbie])