// function Car(carname,brand){
    
// }
// console.log(Car.
//     name)
// console.log(Car.length);
function Car(){
    this.brand="toyata";
    this.model="cermy";
    console.log("car");
    console.log(this);
}
//prototype
Car.prototype.getcarinfo=function(){
    console.log("car brand is toyota and model is carmy");
    console.log(this);
}
let newcar=new Car();
newcar.getcarinfo();