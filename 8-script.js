//variable-->variable is nothing but a it stores the some value
//we have to use three types of keywords for declaring variables
//they are 1.var  2.let  3. const 
var age=25; // by using var keyword you have to reassign and redeclare the value.
age=30;
var age=50;
console.log(age);   //output is 30
//-------------------------------------------------------------------------------------
//let keyword->by using let keyword we have to create the variable.
let name="kavya";//by using let keyword we have to reassign a value but not redeclare the value
name="minnu";
// let name="sree"; //its show error
console.log(name);
//-----------------------------------------------------------------------------------------
//constant
const abc="hello i am \n kavya";//by using const we can not redeclare and reassign thevalue.
// abc="i am from tadipatri";   / its show error
// const abc="reddy"; // its show error
console.log(abc);
//data types
//-----------------------------------------------------------------------------------------
//1.Number
let clgcode=8441;
let clgfee=40000;
let discount=30;
console.log(clgcode);
console.log(clgfee);
console.log(discount);
//2.strings->group of character is called a string.
let clgName="TECH";
let clgAddress="tadipatri";
let clgcse='cse';
let clgece=`ece`;
console.log(clgName);
console.log(clgAddress);
console.log(clgcse);
console.log(clgece);
let aboutTech=`${clgName} is located in ${clgAddress}`;
console.log(aboutTech);
//boolean
let isactive="true";
let isinactive="false";
console.log(isactive);
console.log(isinactive);