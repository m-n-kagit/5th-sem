// const marks=100
// marks<40 ? console.log("need to work hard") : marks<60 ? console.log("B"): marks<70? 
// console.log("B+"):marks<80? console.log("A") : marks<90 ?console.log("A+") : console.log("Genius") 

// //falsy values : "",0,null,undefined
// const name1="Keshav"
// const name2="Mohit"
// console.log((name1 && name2));
// console.log(Boolean(name1 && name2));
//  console.log(name2 || name1);
//----------
 let a =12
 let b;
 console.log(a+(b||0))
 //------
 //&& seeks for first falsy value ,
 //If it coudldn't then it picks the last truthy value
 const name = "Mohit"
 const surname=null
 console.log(name && surname);
 
