function sleep() {
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime + 2000;
    //console.log(startDateTime);
    while (startDateTime < endDateTime) {

    }
}
function step1() {
    console.log("step1");
    sleep();
}
function step2() {
    console.log("step2");
    sleep();
}
function step3() {
    console.log("step3");
    sleep();
}
function step4() {
    console.log("step4");
sleep();
}
// step1(function(){
//     step2(function(){
//         step3(function(){
//             step4();
//         });
//     });
// });
step1();
step2();
step3();
step4();