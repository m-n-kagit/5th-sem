//setTimout
console.log("it was executed");
function greet(){
    console.log("Good Morning");
    
};

setTimeout(greet,1000*2);

let value = 0;
let intervalid = null;
function counting(){
    value=value+1;
    console.log(`${value}`);
    if(value==10){
        clearInterval(intervalid);
    }
}
intervalid=setInterval(counting,1000) // (function,milliseconds)

setTimeout(() => console.log('Hello'), 0);

console.log('World');