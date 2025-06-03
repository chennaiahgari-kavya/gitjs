// if,else ifelse uses------------------------------------
// let age=21;
// if (age>18){
//     console.log("the age is bigger then 18");
// }
// else if(age<18){
//     console.log("the age is below the 18")
// }
// else{
//     console.log("the age is equal t 18");
// }
// to convert upper case to lower case---------------------
// let greet="kavya reddy";
// let greet1=greet.toUpperCase();
// console.log(greet1);
// // to convert lower case to upper  case---------------------
// let greet2="MANASWI REDDY";
// let greet3=greet2.toLowerCase();
// console.log(greet3);
// let greet4="manaswi reddy";
// let greet5=greet4.replace("m","M");
// console.log(greet5);
//logical AND operator
// let age=25;
// let hasId=true;
// if (age>18 && hasId){
//     console.log("you are allowed to enter.");
// }
// else{
//     console.log("entry denied");
// }//output is you are allowed to enter
// let age1=15;
// let hasId1=true;
// if (age1>18 && hasId1){
//     console.log("you are allowed to enter.");
// }
// else{
//     console.log("entry denied");
//}//output is entry denied------------------------------
let age=25;
let hasId=false;
if (age==18 || hasId){
    console.log("you are allowed to enter.");
}
else{
    console.log("entry denied");
}
//---------------------------------------------------------------------
let isStudent = false;
let hasDiscountCoupon = true;

if (isStudent || hasDiscountCoupon) {
  console.log("You get a discount!");
} else {
  console.log("No discount available.");
}
//errors--------------------------------------------------------
//cons cmpnyName="misard";//its show error
const cmpnyName="misard";
console.log(cmpnyName);
let transaction=["creditcard","debitcard","saving"];
console.log(`transactions are ${transaction.length}`);
//-----------------------------------------------------------------------------
try {
  let a = 10;
  let b = 0;
  let result = a / b;  // Although mathematically valid, for demo
  console.log("Result is: " + result);
} catch (error) {
  console.log("An error occurred: " + error.message);
} finally {
  console.log("This block always runs.");
}
//throw----------------------------
try {
  let name = "";
  if (name == "") {
    throw new Error("Name cannot be empty");
  }
  console.log("Name is: " + name);
} catch (error) {
  console.log("Caught an error: " + error.message);
} finally {
  console.log("Execution finished.");
}
//-------------------------------------------------------------------------------
function addNumbers(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("both should be numbers");
        }
        return a + b;
    } catch (exp) {
        console.log("pass valid arguments...");
        
    } finally {
        console.log("execution completed");
    }
}

console.log("the addition of two numbers are: " + addNumbers(5, 'hello'));
//-------------------------------------------------------------------------------
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Denominator should not be zero");
        }
        return a / b;
    } catch (err) {
        console.log("Error occurred: " + err.message);
    } finally {
        console.log("Division operation completed");
    }
}

console.log("Result: " + divide(10, 0));
//---------------------------------------------------------------------------
let a = 5;
if(a===5){
  console.log("the value is a===5");
} 
else if(a==5){
  console.log("the value is a==5");
}
else
{
  console.log("the value is a=5");
}
//output is if statement because you give a number its fallows type also
let b = "5";

if (b === 5) {
  console.log("strict match");
} else if (b == 5) {
  console.log("loose match");
} else {
  console.log("no match");
}

