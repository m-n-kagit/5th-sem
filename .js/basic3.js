// console.log("01"==1)
// console.log("01"===1)
// console.log(null==undefined)
// console.log(null===undefined)

// //null is considerd as 0 when comparing with
// //  number by '>' or '<'
// console.log(null>=0) 
// console.log(null>0)
// console.log(null==0) //returns false.
// console.log(null<1);
console.log("2"<3)
let read = require("readline-sync")
let age  = read.question("How old are you?")
if(age>=18){
    console.log("You are an adult.");
    if(age>=23){
        console.log("You are eligible to get married.");      
    }
}
else{
    console.log('You are a child.');
}

