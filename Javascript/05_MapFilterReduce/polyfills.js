//map , filter, reduce
//💹polyfills for map() => map ko scratch ke bana na

/*
 Prototypes are the 
 mechanism by which JavaScript objects 
 inherit features from one another.
*/


//map returns completely a new array.
Array.prototype.myMapR = function (callback){ //anonymous function
    let emptyArray = [];
    for (let index = 0; index < this.length; index++) {
            //map((currentarray,index,array)=>{})
            emptyArray.push(callback(this[index],index,this));   
    }
    return emptyArray;
};



//custom map function.
const nums = [1,2,3,4,5];
const ModifiedArray = nums.myMapR(
    //callback body
    (num,i,arr)=>{
            return num +1;
    }
)

//console.log(ModifiedArray);


/*
🌄summery : 

step 1 : polyfill means koi bhi chiz scratch se banana 
step 2 : Array.prototype.mymethodName , yaha humne Array object mai , uski proprty access ki
and uske andar ek method banana (method ko koi bhi name de sakte h);
step 3 : funstion(callback) :  yaha callback ki puri body as an argumrnt humne le li
but abhi use nahi kiya.
step 4 : map humesha ek new array return karta h so we have use, emptyArray.
step 5 : jo for loop ke andar (this keyword) h  wo nums ko point kar rahi h.
step 6 : jitna array ka size h utni baar callback call hoga and retuen mai ek value milegi
step 7 : callback(this[index],index,this) => yaha se value ja rahi h (num,i,arr) mai .
step 8 : then wo value return ho rhi h modify hoke, and finally emptyArray mai ek ek 
karke store ho rahi h .
and jab emptyarray mai puri value aa jae to ye phir ModifiedArray ko array send kar de rhi h.


*/












//💹Polyfill for filter
Array.prototype.filterRaksha = function(callback)
{
    const emptyArray = [];
    for (let index = 0; index < this.length; index++) {
        //undefined is falsy value
        if(callback(this[index],index,this)){
            emptyArray.push(callback(this[index],index,this));
        }
     
        
    }
    return emptyArray;
};

let numbers = [10,20,30,40,50,60]
let arr3 = numbers.filterRaksha(
    (val,index,arr)=>{
            if(val >20){
                return val;
            }
});

//console.log(arr3);










//💹Polyfill for Reduce
Array.prototype.reduceKarna = function(callback,accumulatorInitialValue){
    let accum = accumulatorInitialValue;
    for (let index = 0; index < this.length; index++) {
        //if accumulator ki initial value di h to accum pass kar do nahi to 
        //pehle use array ki initial value assign kar do , phir loop chala do.
        accum = accum? callback(accum,this[index],index,this) : this[index];
        
    }
    return accum;
};
let n = [8,2,3,4,5];
let arr4 = n.reduceKarna((accumulator,current,index,arr)=>{
        return accumulator + current;
    
},0); 

console.log(arr4);