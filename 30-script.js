// class school{

//     //field->hold the value
//     sName="sreekanth";
//     sid="505";
//     constructor(name){
//         console.log(`student name is ${this.sName}`);
//     }
//     // constructor(){
//     //     console.log("student id is 505");//A class may only have one constructor
//     // }
//     //method member-------inside the class dont use the fuction keyword
//     enrollstudent(sid){
//         console.log(`student name is ${this.sName} and his enroll id is ${sid}`);
//     }
// }
// new school().enrollstudent("505");
//suppose sName is empty----------------------------------------------------------------
// class school {

//     //     //field->hold the value  
//     #sName;//suppose you  use # its private function-------------------------------
//     sid = "505";
//     constructor() {
//         console.log(`student name is ${this.sName}`);
//     }
//     // constructor(){
//     //     console.log("student id is 505");//A class may only have one constructor
//     // }
//     //method member-------inside the class dont use the fuction keyword
//     enrollstudent(sid) {
//         console.log(`student name is ${this.sName} and his enroll id is ${sid}`);
//     }
// }
// new school().enrollstudent("505");
//-----------------------------------------------------------------------------------------------
// class school{
//     sName="kavya";
//     sId="505";
// }
// let myschool=new school();
// console.log(myschool.sName);
// console.log(myschool.sId);
// setTimeout(()=>{
//     console.log(`%c student name is: ${this.sName} and his roll number is ${this.sId}`,"color:blue");
// },2000);
// console.log(myschool.sId);//its show sName and sId is undefined
//The keyword this inside an arrow function does NOT refer to the instance of the school class (myschool).

//Instead, in an arrow function, this refers to the surrounding (lexical) context — which in this case is the global scope (like window in browsers or {} in Node.js).

//But in the global scope, there is no sName or sId property, so you get undefined
//-------------------------------------------------------------------------------------------
class school{
    sName="kavya";
    sId="505";
}
let myschool=new school();
console.log(myschool.sName);
console.log(myschool.sId);
console.log("wait 10 seconds");
setTimeout(()=>{
    console.log(`%c student name is: ${myschool.sName} and his roll number is ${myschool.sId}`,"background-color:blue");
},20000);
//console.log(myschool.sId);