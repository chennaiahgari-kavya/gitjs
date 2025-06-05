// function greeting(name) {
//   console.log("Hello, " + name + "!");
// }

// function processUserInput(callback) {
//   const name = "Ravi";
//   callback(name); // calling the callback function
// }

//processUserInput(greeting);
//--------------------------------------------
// function greet(name){
//     console.log("hello,"+name);
// }
// function userName(callback){
//     let name="kavya";
//     callback(name);
// }
// userName(greet);
//--------------------------------------
//callback hell-------------------------
// function step1(result1) {
//   doSomethingElse(result1, step2);
// }
// function step2(result2) {
//   doAnotherThing(result2, step3);
// }
// function step3(result3) {
//   doFinalThing(result3, finalStep);
// }
// function finalStep(finalResult) {
//   console.log("Final Result: " + finalResult);
// }

// doSomething(step1);
//
// doSomething(function(result1) {
//   doSomethingElse(result1, function(result2) {
//     doAnotherThing(result2, function(result3) {
//       doFinalThing(result3, function(finalResult) {
//         console.log("Final Result: " + finalResult);
//       });
//     });
//   });
// });
//----------------------------------------
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");
//synchronous call------------------------------------------------
// function getUserName() {
//   return "Ravi";
// }

// function greetUser(name) {
//   console.log("Hello, " + name);
// }

// const name = getUserName(); // this must complete before next line
// greetUser(name);            // uses the result of previous function
//--------------------------------------------------
// function longTask() {
//   for (let i = 0; i < 5e9; i++) {} // time-consuming loop
//   console.log("Long task finished");
// }

// console.log("Start");
// longTask();
// console.log("End");
//another example
function favMoviesList(){
    
    console.log("mirchi");
}
console.log("first movie");
favMoviesList();
console.log("second movie displayed after some time");