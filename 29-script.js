//class-->class is a special type of  function which maintain the group the ralative members
// class kavya{
//     constructor(){

//     }
// }
class school{
    constructor(name){
        console.log(`student name is ${name}`);
    }
    // constructor(){
    //     console.log("student id is 505");//A class may only have one constructor
    // }
    //method member-------inside the class dont use the fuction keyword
    enrollstudent(sid,name){
        console.log(`student name is ${name} and his enroll id is ${sid}`);
    }
}
new school("manaswi").enrollstudent("505","manaswi");
// let myschool=new school().enrollstudent();
// console.log(myschool);