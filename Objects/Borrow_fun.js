const rahul={
    name : "rahul",
    profession : "student",
    age : 25,
    bio : function(hobby){
        console.log(this.name + " " + this.profession + " " +hobby);
    }
};

const john ={
    name : "john",
    profession : "teacher",
    age : 40
};

// rahul.bio.call(john);
// rahul.bio.call(john,"basketball")

//in case of apply just use array for argument
// rahul.bio.apply(john,["chess"])


//whenever we want to use

var result = rahul.bio.bind(john)

// result("killer")