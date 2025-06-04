//while----------------------->while can be used to until the condition is true then the program is executed
let i = 0;

while (i < 5) {
  console.log("i =", i);
  i=i+1;//instead we have to use i++;
}
//suppose you print array of items-------------------
let fruits=["apple","mango","banana","kiwi","orange"];
let index=0;
while(index<fruits.length){
    console.log(fruits[index]);
    index++;

}
console.log(fruits.length);
//-----------------------------------------------------------
let password = "";

while (password !== "1234") {
  password = prompt("Enter password:");
}

alert("Access granted!");
//------------------------------------------------------
function userpassword(){
  
}