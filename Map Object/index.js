
/*-------- 🍑Map object ----------*/

/*

🐥A Map holds key-value pairs where the keys can be any datatype.

🐥A Map remembers the original insertion order of the keys.

🐥A Map has a property that represents the size of the map.

*/

let map = new Map([
    ['name','raksha'],
['roll_no',23],
['marks',80.21]
]);
// console.log(map);


map.set('clg','JIT');
// console.log(map);

// let spread = [...map];
// console.log(spread);

// console.log(map.get('marks'));
// console.log(map.delete('roll_no'));
// console.log(map);
// console.log(map.has('name'));









/*-------- 🍑Iteration ----------*/






map.forEach(function(key,value){
    console.log(key + " "+ value);
});



console.log("----------🏀")
for(let [key,value] of map){
    console.log(key + " "+ value);
}






console.log("----------🏀")
for(let mapentries of map.entries()){
    console.log(mapentries);
}










// for(let key of map.keys()){
//     console.log(key);
// }















// for(let value of map.values()){
//     console.log(value);
// }











/*


🍑new Map()	Creates a new Map object
🍑set()	Sets the value for a key in a Map
🍑get()	Gets the value for a key in a Map
🍑clear()	Removes all the elements from a Map
🍑delete()	Removes a Map element specified by a key
🍑has()	Returns true if a key exists in a Map
🍑forEach()	Invokes a callback for each key/value pair in a Map
🍑entries()	Returns an iterator object with the [key, value] pairs in a Map
🍑keys()	Returns an iterator object with the keys in a Map
🍑values()	Returns an iterator object of the values in a Map
.size == property
*/