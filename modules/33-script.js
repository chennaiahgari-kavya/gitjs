// Set data in Local Storage
localStorage.setItem("username", "Ravi");

// Get data from Local Storage
let user = localStorage.getItem("username");
console.log(user);  // Output: Ravi

// Remove a specific item
localStorage.removeItem("username");

// Clear all data in Local Storage
localStorage.clear();
//------------------------------------------------------
//sessionStorage
// Set data in Session Storage
sessionStorage.setItem("sessionUser", "Kiran");

// Get data from Session Storage
let sessionUser = sessionStorage.getItem("sessionUser");
console.log(sessionUser);  // Output: Kiran

// Remove a specific item
sessionStorage.removeItem("sessionUser");

// Clear all data in Session Storage
sessionStorage.clear();
