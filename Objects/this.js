//this keyword refer to object
//in event it refer to element

const person = {
    name :"rahul",
    lName : "jaiswal",
    height : 6.0,
    age : 25,
    des : function(){
        console.log(`the name is ${this.name} and lastname is ${this.lName}
        , height is ${this.height}`)
    }
};

person.des()