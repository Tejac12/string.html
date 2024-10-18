/*1..take two strings with spaces at starting of one string and 
at the ending of another string remove the spaces and 
concat the both string and 
convert the combined string into uppercase string*/


var str1 = "               jalebi";
var str2 = "samosa               ";
var trimstr1 = str1.trimStart();
var trimstr2 = str2.trimEnd();
console.log(trimstr1)
console.log(trimstr2)
var concatStr = str1.concat(str2);
var upper_case_str = concatStr.toUpperCase();
console.log(upper_case_str)

/*2..Extract Middle Portion of the string and
 get the last index of char of extracted string and
 Convert the portion to Lowercase*/

var str = "JALEBISAMOSA";
var str1_slice = str.slice(2, 11);
console.log(str1_slice)
var lastindex = str1_slice.indexOf("S");
console.log(lastindex)
var str1_slice = str1_slice.toLowerCase();
console.log(str1_slice)


/*3.take a single char and concat string to that char and 
convert the resulted string to uppercase and 
then extract the last second char */

var str = "Tech";
var str1 = "Hub";
var concatStr = str.concat(str1);
var upper_case_str = concatStr.toUpperCase();
var upper_case_str_slice = upper_case_str.slice(4, 7);
console.log(upper_case_str_slice)

/*4.we have 2 string and extract first 3 chars of first string and
 extra last 3 chars of another string and concat those 2 results together
 and first char and last char of the resulted concatinated string should as uppercase
*/

var str1 = "coca";
var str2 = "cola";
var slice_str1 = str1.slice(0, 3);
var slice_str2 = str2.slice(-3);
var concat_str = slice_str1.concat(slice_str2);
var upper_case_str = concat_str.toUpperCase();
console.log(upper_case_str)


/*5.You are given a string with extra spaces at the beginning and end.
 You need to trim the string, make the first and last characters uppercase, 
 extract a specific part of the string, 
 concatenate it with another string
*/


var str = "  contaminated Thums Up    ";
var trimstr = str.trim();
var upper_case_str = trimstr.toUpperCase();
var slice_str = upper_case_str.slice(12, 21);
var str1 = "cool drink";
var concat_str = slice_str.concat(str1);
console.log(concat_str)


/*6."hello there , how are you " find the index of are word in the sentence
*/

var str = "hello there, how are you ";
var index_str = str.indexOf("are");
console.log(index_str)




