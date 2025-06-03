//FUNCTION->
function greet1(){
console.log("hello");
}
greet1();//calling function
//parameters
function greet2(a,b){
    console.log(a+b);
}
greet2(4,5)
//anonymous function-
let greet3=function(){
    console.log("welcome to misarrd");
}
greet3();
//parameters
let greet4=function(username)
{
    console.log("welcome to ",username);
}
greet4("misard");
//take the variable and assign the return type anonymous function
let greet5=function(){
    return "hellokavya" ;
}
let greet6=greet5();
document.write(greet6);
//arrow function
let greet7=(username1)=>
{
//console.log("hello  gud mrng",username1);
return`gudnight ${username1}`;
}
let greet8=greet7("kavya");
console.log(greet8);

