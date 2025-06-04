// for (let i = 0; i < 5; i++) {
//     console.log("Value of i is:", i);
// }
// //--------------------------------------------
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);

// }
//   console.log(fruits.length);
//  // --------------------------------------------------------------
//   let person = {
//   name: "Ravi",
//   age: 30,
//   city: "Hyderabad"
// };
//for...in---------------------------------------------------------
// for (let value in person) {
//  // console.log(value + ": " + person[value]);
//  console.log(     value+      "    :           " +person[value]);
// }
// Object.keys() + for loop --------------------------------------------
// let person1 = {
//   name: "Ravi",
//   age: 30,
//   city: "Hyderabad"
// };

// let keys = Object.keys(person1);

// for (let i = 0; i < keys.length; i++) {
//   let key = keys[i];
//   console.log(key + ": " + person1[key]);
// }
// Object.entries() + for loop-----------------------------------
// let person = {
//   name: "Ravi",
//   age: 30,
//   city: "Hyderabad"
// };

// let entries = Object.entries(person);

// for (let i = 0; i < entries.length; i++) {
//   let [key, value] = entries[i];
//   console.log(key + ": " + value);
//}
//Object.values() — values-------------------
let person1 = {
  name: "Ravi",
  age: 30,
  city: "Hyderabad"
};
let values1=Object.values(person1);
for (let i=0; i<values1.length;i++){
    let values =values1[i];
    //console.log(values1.length)
    console.log(values1);
}
//-------------------------------------------
let person = {
  name: "Ravi",
  age: 30,
  city: "Hyderabad"
};

let values = Object.values(person);

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}
//----------------------------------------
let colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
// String by using for...of e---------------------------
let word = "Hello";

for (let kavya of word) {
  console.log(kavya );
}
//sets-----------------------
let items = ["appl", "banana", "apple", "mango"];

for (let item of items) {
  console.log(item);
}
//
// let obj = { a: 1, b: 2 };
// for (let item of obj) {
//     console.log(item);
//}//it show error because for..of works only like Arrays, Strings, Maps, Sets, etc.
//for in nested objects
let student = {
  name: "sree",
  marks: {
    math: 90,
    science: 85
  }
};

for (let key in student.marks) {
  console.log(key + ": " + student.marks[key]);
}



