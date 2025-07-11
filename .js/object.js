// object --> {key,value}
//object keys must be string 
//implicitly change the key element   to string if it is a word 

const obj = {
    name : "Prakash", //property
    age : 99,
    job : "Mentor",
    course : ['html',"css","js"],
    "Is Admin" : "Yes"
};


console.log(obj.name);
console.log(obj.job);
console.log(obj["Is Admin"]);

const obj2 = {
    name : "Mohit Sharma",
    greetMessage: function(){
        console.log("Hello");
        
    },
    greet(){
        console.log("Bye Bye");
        
    }
}
obj2.greetMessage()
console.log(obj2);

//adding properties
//and computed properties 
const read = require("readline-sync")
const course = read.question("Enter the course (html,css,js,reat) - ")

const obj3 ={
    name : "Prakash",
    age : 21,
    [course] : "Course not available." //By writing [course], you're saying: "Whatever value is stored in the variable course, use that as the property key."
}


obj3.city = "Mumbai"
obj3.state = "MH"
console.log(obj3);
console.log(obj3[course]);

let name = "Mohit"
let age = 21


function getObjects1(name,city){
    return {
        name: name,
        age: age
    }
}
 //shorthand for this 
function getObjects(name,city){
    return {
        name,
        city
    }
}

const student = getObjects(name,age)
console.log(student);
