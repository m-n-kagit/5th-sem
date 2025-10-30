//Types of function :- Pure and unpure 
//Function is called as first citiezen in js 
//1 
// const greet  = function (){
//     console.log("Welcome");
    
//  }

//  greet();

//2 nprmal way 

function greetMessage(){
    function wrapper(){
        console.log("Welcome");
        
    }
    return wrapper;
}
console.log(greetMessage);


const output  = greetMessage(); //pointing to the wrapper function
greetMessage()()

//Higher order function 

function wrapper(){ //this becomes the first class function 
    return "Welcome"//as we are passing it as an arguement 
}

function greetM(wrapper){ //higher order func
    console.log("Mohit",',',wrapper());
    
}

function greetM2(){ //this is also a higher order function 
    return function(){
        console.log("Welcome");
        
    }
}

greetM(wrapper)