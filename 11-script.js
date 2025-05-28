// take the function 
// in that function take 2 input parameters , first parameter should be primitive dattype(number) , 
// second paramter should be function(callbackfunction)
// Pass firstparameter as argumnet into that callbackfunction
// return type should be void
// i want to print length of books

// f10 -> next line   1 
// f11 -> inside of te function
function processNumber(num, callback) {
    
    callback(num); // Pass number to callback
}

// Example usage:
const books = ["Book1", "Book2", "Book3", "Book4"];

processNumber(books.length, function(length) {
    console.log("Number of books:", length);
});
//----------------another exmple
function weeksInaDays(string,anonymousfunction){
   anonymousfunction(string);

}
days=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
weeksInaDays(days.length,function(length){
console.log(length);

})
//return type
function months(count,returntype){
    return returntype(count);

}
mnames=["january","febrary","march","april","may","june","july","august","sep","oct","nov","dec"]
months(mnames.length,function(length){
    console.log(length);
})
//default parameters
function books2(count,callback=function(bookscount)
{
    console.log(bookscount);
}){
    callback(count);

}
let books1=["Book A", "Book B", "Book C", "Book D", "Book E"]
//books2(books1.length);
books2(books1.length,function(length){
    console.log("books length are",length);
})