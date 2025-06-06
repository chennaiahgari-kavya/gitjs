//promise
// let success=false;
// let mypromise =new Promise((resolve, reject) => {
//     if(success){
//         resolve("success message");
//     }
//     else{
//         reject("fail message");
//     }
// });
// mypromise.then((result)=>{
//     console.log(result);
// }).catch((exception)=>{
//     console.log(exception);
// })
// multiple promises----------------------------------------------------------
// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step1 complete");
//             resolve("step1 result");
//         }, 5000);
//     });
// }
// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("step2 complete");
//             resolve("step2 result");
//         }, 6000);
//     });
// }
// console.time("my task time");
// step1().then((result) => {
//     console.log(result);
// return step2();
// }).then((result1)=>{
//     console.log(result1);
//     console.log("final result",result1);
//     console.timeEnd("my task time");
// })

//-------------------------------another example for mutliple promises
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve("Step 1 result");
    }, 1000);
  });
}

function step2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete, using:", previousResult);
      resolve("Step 2 result");
    }, 1000);
  });
}

// step1()
//   .then(result1 => step2(result1))
//   .then(result2 => console.log("Final Result:", result2));
// console.time("my task time");
// Promise.all([step1(),step2()]).then(Notifications)
// {
// console.log(Notifications);
// console.timeEnd("my task time");
// }
console.time("my task time");

Promise.all([step1(), step2()]).then((results) => {
  console.log("Results:", results);
  console.timeEnd("my task time");
});