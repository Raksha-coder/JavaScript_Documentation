/*  You already know that you can create
 strings with double quotes or single quotes,
  but as you already know, these strings do not 
  support interpolation.

Template strings,
 however, support interpolation
 and other nifty features. */


 //The only difference is that template strings start and end with a backtick ` character.

 var stringT = `this is template string in javascript ...`;
 console.log(stringT);

 //multiple line string

 var multiLine = `this is first
 this is second
 this is third line`;

 console.log(multiLine);

 /*
 
Interpolation


Template strings support interpolation! 
This means you could write a variable in your string, 
and get its value. The syntax is straightforward, 
you wrap your variable name with a 
dollar sign and curly braces. 
Let's take an example where 
we have a variable language with a value of JavaScript.
 */
var language = "JavaScript";
var description = `the language we are going to learn is ${language}`;
console.log(description);