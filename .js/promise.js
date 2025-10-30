/**
 * Promise - Promise is an object that has the status of an async 
 * operation, and its coressponding value.
 */

const Url = "https://mockdata.prakashsakari.repl.co/user";
let promise = fetch(Url);
promise.then(function (response){
    return response.json();
})
.then(function(data){
    console.log({data});
    
})
.catch(function(error){
    console.log("Error Occured",error);
})

//below one has no async operation 

const isRequest = true;
let promise2 = new Promise((resolve,reject) => {
    if(isRequest){
        setTimeout(()=> resolve("Promise resolved"), 3000);
    }
    else{
        const error = new Error("Something went wrong");
        reject(error);
    }
})

console.log(promise2);
