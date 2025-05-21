//arrow functions--->in arrow function we have to use => in the place of function.
// let weeks= ()=>{
//     console.log("kavya");
// } 
// weeks();
//---------------------------------------------------------------------
//by passing parameters and arguments
// let weeks= (day1,day2)=>{
//     console.log("kavya");
//     console.log(day1);
//     console.log(day2);
// } 
// weeks("monday","tuesday");
// template literals
// let age = 30;
// let kavya = `sree age is ${age}`;
// document.write(kavya);
// //return type function
// function weeksdays(day1, day2, day3, day4, day5, day6, day7) {
//     return (`week days- ${day1}, ${day2},${day3},${day4},${day5},${day6},${day7}`);
// }
// let weeksday = weeksdays("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
// console.log(weeksday)
//predefined function
// setTimeout(function () {
//     console.log("execution starts at five sec");
// },5000);
// setTimeout(execution(day3)
// {
//     console.log(day3)
// },10000,execution("wednesday"));
//setinterval
setInterval(function(){
    document.write("kavyaaaaaa")
},5000);
// predefined functions with parameters and arguments
setTimeout (function(day1){
    console.log(day1);
},5000,"monday");
// setinterval with parameters and arguments
setInterval(function(day2){
    console.log(day2)
},5000,"tuesday");