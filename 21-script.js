function favMoviesList(){
    console.log("mirchi");
}

console.log("first movie");
favMoviesList();
setTimeout(function() {
    console.log("second movie displayed after some time");
}, 2000); // 2 seconds delay
//synchronous calls examples
function greet() {
  console.log("Hello!");
}

function farewell() {
  console.log("Goodbye!");
}

greet();
farewell();
//-----------------------------------------------------
function add(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}

const sum = add(5, 10);       // 15
const result = multiply(sum, 2); // 30

console.log(result);
//------------------------------------------------------------
console.log("Start");

for (let i = 0; i < 1e9; i++) {
  // Long synchronous loop
}

console.log("End");
    
