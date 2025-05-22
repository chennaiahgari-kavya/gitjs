// // global variables vs local variables
// var weekday="monday";
// console.log("week statingday is-",weekday);
// //  console.log("first day of weekend  is-",firstweekend);//error
// {
//     //local variable-block-1
//     let firstweekend="saturday";
//     console.log("first day of weekend  is-",firstweekend);
//     // console.log("week statingday is-",weekday); // error
// }
// {
//     //local variable-block-2
//     let secondweekend="sunday";
//     console.log("second of weekend is-",secondweekend);
//     //  console.log("first day of weekend  is-",firstweekend);//error
// }
// //------------------------------------
//in a block we use var it can be applicable for outside of the function
// {
//     var fruit="apple";
//     console.log(fruit);
// }
// {
//     console.log(fruit);  //apple
// }
//------------------------------------------------------
// // in a block we use let it can be executed with in the block
// { let fruit2="kiwi";
//     console.log(fruit2);

// }
// {
//    console.log(fruit2); //error
// }
//--------------------------------------------------------------
//by using function
// function myfunction()
// {
//     let carName="honda";
// console.log(carName);
// }myfunction();
// function myfunction1(){
//     let carName1="volvo";
//     console.log(carName1);
// }myfunction1();
// {
//     console.log(carName1);
// }myfunction1();//error because in function we cant use outside wheather you choose var and let keywords
//------------------------------------------------------------
//by using arrays--------------------
let a1=[501,502,503,504,505];
console.log("ids of students",a1);
function block1()
{
    let a2=["minnu","Sree","kranthi","jassu","kavya"];
    console.log(a2[2]);
    console.log("ids of students",a1);
}
block1();
function block2(){
    let a3=["car","bike","scooty","lorry","train"];
    console.log(a3[2]);
}block2();
//by using objects---------------------------
var person={
    name:"kavya",
    id:505,
    clgname:"tech",
    branch:"cse"
}
console.log(person)
{
    let address={
        vName:"talla prodduter",
        pin:"516474",
        dist:"kadapa",

    }
    console.log(address);
    console.log(person)
}