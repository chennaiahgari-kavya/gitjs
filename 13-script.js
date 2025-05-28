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
let authors=["tagore","j.k.roling"];
let books=["java","python"];
console.log(this);
let getBookDetails=function(){
    return books;
}