console.log(3||2||1); //first truthy value
console.log(""||0||-1); //as 0 is considered as fallcy value
console.log(""||0||undefined);
//all are falcy values then it shows last fallcy value
console.log(""||null||2);
console.log(undefined && null && ""); //all falcy so will return first fallcy value
console.log(3 && undefined && 1); //first fallacy 
console.log(3 && 2 && 1);

//?? nullish operator 
//doest considered any fallcy values, just if first one is undefined or null , only then it return the rightside value 
// console.log( "kirti" ?? 0);
console.log(null ?? "kirti");

let a
console.log(a);
for(let i=0 ;i<10;i++){
    console.log(i);
    
}
let name = "Mohit Sharma"
const n= name.length;
for(let i=0 ; i<n;i++){
    if(name[i]!=" "){
        console.log(name[i]);
    }
}


