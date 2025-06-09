class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName; // _ indicates private-like property
//     this._lastName = lastName;
//   }

  // Getter method
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Setter method
  set fullName(name) {
    const parts = name.split('');
    if(parts.length === 10) {
      this._firstName = parts[0];
      this._lastName = parts[1];
    } else {
      console.log("Please provide both first and last name.");
    }
  }
}

const person = new Person("John", "Doe");

console.log(person.fullName); // Using get → Output: John Doe

person.fullName = "Jane Smith"; // Using set to change values
console.log(person.fullName);   // Output: Jane Smith

person.fullName = "SingleName"; // Invalid set
// Output: Please provide both first and last name.
