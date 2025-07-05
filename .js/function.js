// anyfunction()

// function anyfunction(){
//     console.log("Hello world");
    
// }
// anyfunction()

// anonymous() //not able to call now , as 
// js consider it as a variable

//   
console.log(typeof anonymous); //undefined

var anonymous= function(){ //anonymous function 
    console.log("hello world");
    
} 

console.log(typeof anonymous); //function

// var anonymous= function greetMess(){  
//     console.log("hello world");
    
// } 

// greetMess(); //not called globally ,can be called locally , like above

// anonymous() // now , it will work , prints the desired output

function sum(x,y){
    return x+y;
}

const result =sum(12,34);
console.log(result);

const calculateSum = (x,y) => { //Arrow function
    if(x>y){
        return x+y
    }
    else{
        return x-y
    }
}

// short hand

const Sum = (x,y) => x>y ? x+y : x-y
 
