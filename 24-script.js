function sleep(milliseconds) {
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime;
    //console.log(startDateTime);
    while (startDateTime < endDateTime) {

    }
}
function step1() {
     sleep(2000);
    console.log("step1");
   
}
function step2() {
    sleep(3000);
    console.log("step2");
    
}
function step3() {
    sleep(4000);
    console.log("step3");
    
}
function step4() {
     sleep(5000);
    console.log("step4");
   
}
// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4();
//         });
//     });
// });
console.time("my task time");
step1();
step2();
step3();
step4();
console.timeEnd("my task time")