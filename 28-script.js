//async-----------------
//  async function getBranchDetails(){
//     console.log("my branch is CSE");
//     await console.log("ECE IS my friend branch");
//     console.log("EEE is not a part of my branch");
// } getBranchDetails();//here async ans await not working
//------------------------------------------------------------------------------------------------
// let branch=true;
// async function getBranchDetails(){
//    return new Promise((resolve,reject)=>{
//         if(branch){
//             resolve(" CSE");
//         }
//         else{
//             reject("EEE is not my branch")
//         }
//     })
// }
// //let finalBranch=getBranchDetails()
// getBranchDetails().then((data)=>{
//     console.log("kavya branch is:",data);
// }).catch((err) => {
//         console.log("Error:", err);
//     });
// //--------------------------------------------------------------------------------------------
// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function delayedMessage() {
//     console.log("Waiting for 2 seconds...");
//     await wait(2000);
//     console.log("Done waiting!");
// }

// delayedMessage();
//-----------------------------------------------------------------------------------------------
// async function ms1(){
//     console.log("Waiting for 2 seconds...");
//       await new Promise(resolve => {
//         setTimeout(resolve, 2000);
//     });
//     console.log("Done waiting!");
//  }ms1();
 //-----------------------------------------------------------------------------------------
//  function ms2(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Waiting for 10 seconds...");
//             resolve();
//         },10000);
//     })
//  }
//  async  function delayms3(){
// console.log("Waiting for 5 seconds...");
// console.log("Waiting for 7 seconds...");
//  await ms2();
// console.log("Done waiting!");
//  }
//  delayms3();
//-----------------------------------------------------------------------------------------
async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await response.json();
        console.log("User Name:", user.name);
    } catch (error) {
        console.error("Error fetching user:", error.message);
    }
}

getUser();
