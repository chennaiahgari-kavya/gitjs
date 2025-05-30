//this keyword--------------------------
//global context--------------------------------------
//console.log(this);//its print the window
// var authors=["tagore","j.k.roling"];
// var books=["java","python"];
// console.log(this);
// var getBookDetails=function(){
//     return books;
// }
// console.log(this);//its display the family members function
// console.log(this.authors);//no output
//by using this keyword also we can declare
// this.authors=["tagore","j.k.roling"];
// this.books=["java","python"];
// this.bookDetails=()=>
// {
//     return authors;

// }
// console.log(this);
// by using let keyword  // by using let keyword the output will not display on the family members details
//console.log(this);//its print the window
// let authors=["tagore","j.k.roling"];
// let books=["java","python"];
// console.log(this);
// let getBookDetails=function(){
//     return books;
// }
//object context------------------------------------
// var laptop={
//     cpu:"i5",
//     ram:"16gb",
//     generation:"5th",
//     getlaptopDetails:function(){
//         console.log(this)
//     }
// } 
// laptop.getlaptopDetails();
// //suppose you want print a single prperty you have to fallow below rule
// console.log(laptop.generation);
// console.log(laptop.cpu);
//suppose  the prperty gives outside of the object its show udefined why beacause the scope of the object is with in the object only
// var ram="16gb";
// var laptop={
//     cpu:"i5",
//     //ram:"16gb",
//     generation:"5th",
//     getlaptopDetails:function(){
//         console.log(this)
//     }
// } 
// laptop.getlaptopDetails();
// console.log(laptop.ram);
//constructor function-------------------------
// function laptop(){
//     this.cpu="i5";
//     this.ram="16gb";
//     this.generation="5th";
//     console.log(this);

// }
// new laptop();
//-----------------------------------------------
// function laptop(){
//     this.cpu = "i5",
//     this.ram = "16gb",
//     this.generation = "5th";
//     console.log(this);
// }

// new laptop();
// //suppose you pass the parameters
// function laptop(cpuName,RAMType){
//     this.cpu = cpuName;
//     this.ram = RAMType;
//     this.generation = "5th";
//     console.log(this);
// }

// new laptop("I5","16GB");
//ARROW FUNCTION---------------------------
var cpu1="i6";
var laptop = {
    cpu: "i5",
    ram: "16gb",
    generation: "5th",
    getlaptopDetails:()=>{
        console.log(this);
        console.log(this.cpu1);//in the arrow function this keyword which is prefer in global context
        // if you use without object it wil  print
    }
}
laptop.getlaptopDetails();

