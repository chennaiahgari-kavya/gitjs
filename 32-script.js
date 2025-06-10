class person {
    #personName;
    #personLocation;
    constructor(name, location) {
        this.#personName = name;
        this.#personLocation = location;
    }
    workingPlace() {
        let emp1 = {
            name: "kavya",
            empId: "emp123",
            empfield: "dot net"
        }
        //console.log(this.workingPlace().this.name);
        console.log(`Employee Name: ${emp1.name}`);
        console.log(`Employee ID: ${emp1.empId}`);
        console.log(`Employee Field: ${emp1.empfield}`);
        console.log(`Employeename is ${emp1.name} and his employee id is ${emp1.empId} and his field is ${emp1.empfield}`)
    }
   
}
 class person2{
    

        
    }
let person1 = new person("sreee", "bangalore");
person1.workingPlace();