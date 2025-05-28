//conditional statrment
// let ishavingbankaccount=true; //if it is true it will be executed
// if (ishavingbankaccount){
//     console.log(" %c gmailId:ckavya.fullstack@gmail.com", "background-color:yellow");
//     console.log("username:kavyareddy");
// }
//
// let ishavingbankaccount=false;//if it is false it will not executed
// if (ishavingbankaccount){
//     console.log(" %c gmailId:ckavya.fullstack@gmail.com", "background-color:yellow");
//     console.log("username:kavyareddy");
// }
let isHavingamazonaccess=false;
let isHavingdisneyaccess=false;
if(isHavingamazonaccess){
    console.log("yes i am having amazon account");
}
else if(isHavingdisneyaccess) //else if is used to continue if statements
    {
    console.log("yes i am having disney account"); 
}
else{
    console.log("i dont have any access");

}
//switch statement
daynumber=8;
switch(daynumber){
    case 1:{
console.log("its sunday");
break;
    }
    case 2:{
        console.log("its monday");
        break;
    }
    case 3:{
        console.log("its tuesday");
        break;
    }
    case 4:{
        console.log("its wednesday");
        break;
    }
    case 5:{
        console.log("its thursday");
        break;
    }
    case 6:{
        console.log("its friday");
        break;
    }
    case 7:{
        console.log("its saturday");
        break;
    }
    default :{
        console.log("your input is wrong");
        break;
    }
}