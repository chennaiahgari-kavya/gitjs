//callbackhell-------------------------------------
// function step1(callback) {
//     console.log("step1");
//     callback();
// }
// function step2(step2callback) {
//     console.log("step2");
//     step2callback();
// }
// function step3(step3callback) {
//     console.log("step3");
//     step3callback();
// }
// function step4() {
//     console.log("step4");
    
// }
// step1(() => {
//     step2(() => {
//         step3(() => {
//             step4();
//         });
//     });
// });
//-----------another example-------------------
// function step1(callback){
//     console.log("step1:  getting user data......");

// setTimeout(()=>{
//     callback("user data:");
// },3000);
// }
// function step2(callback2){
//     console.log("step2: processing");
//     setTimeout(()=>{
// callback2("processed");
//     },4000);
// }
// function step3(callback3){
//     console.log("step3:  saving");
//     setTimeout(()=>{
//         callback3("data saved");
//     },5000);
// }

// step1(()=>{
//     step2(()=>{
//         step3();
//     });
// });
//--------------------------------------------------------------
// function step1(callback) {
//   console.log("Step 1: Getting user data...");
//   setTimeout(() => {
//     callback("User data");
//   }, 1000);
// }

// function step2(data, callback) {
//   console.log("Step 2: Processing", data);
//   setTimeout(() => {
//     callback("Processed data");
//   }, 1000);
// }

// function step3(data, callback) {
//   console.log("Step 3: Saving", data);
//   setTimeout(() => {
//     callback("Data saved");
//   }, 1000);
// }

// Callback Hell
// step1(function(result1) {
//   step2(result1, function(result2) {
//     step3(result2, function(result3) {
//       console.log("Final Result:", result3);
//     });
//   });
// });
// step1(()=>{
//     step2(()=>{
//         step3();
//     });
// });
// step1(function(final1){
//     step2(final1,function(final2){
//         step3(final2,function(final3){
//             console.log("final result",final3);
//         });
//     });
// });