/*
A substring is a part or a portion of a string. 
For example, 
"rain" is a substring of the string 
"brain" because you can get "rain" 
by taking the last 4 characters.
*/

/*     someString.substring(indexStart, indexEnd)   */

/*
indexStart: the position of the first character you'd like to include
indexEnd: the position of the first character you'd like to ignore
*/

const language = "javascript";

language.substring(1,4);

console.log(language.substring(1,4));

//Optional parameters

/* The indexEnd parameter is optional,
 which means you can pass the indexStart 
 and it'll assume the indexEnd to be the 
 same as the string length. Here's an example:
*/

var sname = "srudent";

console.log(sname.substring(2));

