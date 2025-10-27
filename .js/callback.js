//examples of callback functions 
function greet(name,callback)
{
    console.log("Hello" + name);
    callback();
    
}

function sayBye(){
    console.log("Goodbye!");
    
}

greet("Ajay",sayBye);

console.log("Start");

setTimeout(function (){
    console.log("Inside setTimeout");
    
},2000);
console.log("End");

console.log("Hello");
