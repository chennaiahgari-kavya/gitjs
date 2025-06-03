// function week(){
//     console.log("hello");

// }
// week();
// //addition AND pass parameters-------------

// function week1(a,b){
//     console.log(a+b);
// }week1(2,5)
// //arrow functions-------------------------------------------
// let greet=()=>{
//     document.write("hello gud night");
// }
// greet();
//parameters-------------------------------------------
var greet1=(username)=>{
    return `goodnight,${username}`;
}
let greet2=greet1("kavya");
document.write(greet2);
//anonymous function----------------------------------------------------
// const greet=function(){
//     console.group("welcome to misard")
// }
// greet();
//passing arguments to the anonymous function------------------------------
// const greet=function(cmpyname){
//     console.log("welcome to ",cmpyname);
// }
// greet("misard");
// self exeuting functions
(function(){
    console.log("hey!! i am kavyA")
})();