stepOne(()=>{
    stepTwo(()=>{
        stepThree(()=>{
            stepFour();
        });
    });
})
//==================================
function sleep(){
    var startDateTime = new Date().getTime();
    var endDateTime = startDateTime+4000;

    while(new Date().getTime()<endDateTime){

    }
}

function stepOne(){
    sleep();
    console.log("stepOne");
    
}
function stepTwo(){
    sleep();
    console.log("stepTwo");
}
function stepThree(){
    sleep();
    console.log("StepThree");
    
}
function stepFour(){
    sleep();
    console.log("stepfour");

}
stepOne();
stepTwo();
stepThree();
stepFour();
//--------------------------
