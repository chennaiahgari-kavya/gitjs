//function its types
//anonymous fuction
// let showdays=function(){
//     console.group("hello world")
// }
// showdays();
//-------------------------
//by passing parameters and arguments
// let showdays = function (day1, day2, day3, day4, day5, day6, day7)   //these are parameters
// {
//     // console.log("hello world");
//     console.log("Day1: " + day1);
//     console.log("Day2: " + day2);
//     console.log("Day3: " + day3);
//     console.log("Day4: " + day4);
//     console.log("Day5: " + day5);
//     console.log("Day6: " + day6);
//     console.log("day7: " + day7);

// }
// showdays("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
// let showdays = function (day1, day2)
// {
// console.log("hello world");
// console.log("Day1: "+day1);
// console.log("Day2: "+day2);
// console.log("Day3: ",+day3);
// console.log("Day4: ",+day4);
// console.log("Day5: ",+day5);
// console.log("Day6: ",+day6);
// console.log("day7: ",+day7);

// }
// showdays("monday", "tuesday")
//-------------------------------
//without function  cal is called IIEF
// (function()
// {
//     let month="collection of weeks is called mnth";
//     console.log(month);
// })();
// //IIFE examle by passing aguments and parameters
// (function(day1, day2, day3, day4, day5, day6, day7)
// {
//     let month="collection of weeks is called mnth";
//     console.log(month);
//     console.log("hello world");
// console.log("Day1: "+day1);
// console.log("Day2: "+day2);
// console.log("Day3: "+day3);
// console.log("Day4: "+day4);
// console.log("Day5: "+day5);
// console.log("Day6: "+day6);
// console.log("day7: "+day7);
// })("monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday");
//-------------------------------------------------------------------------------------
//CALBAC FUNCTION--->IN THE PLACE OF ARGUMENTS WE PASS A FUNCTION
// function weeks(callback){
//      callback();
// }
// weeks(function(){
//     console.log("hello world");
// })
// function weeks(para1) {
//     //  console.log(para1); // by  using this we have t print function as output
//     para1();
// }
// weeks(function () {
//     console.log("hello world");
// });
//callback in function pass a value
function month(para1)
{
para1(50);
}
month(function(p1){
    console.log(p1);
})