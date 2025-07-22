//Explicit binding and implicit binding 
const user1 ={
    name:"Mohit sharma",
    year:"3rd",
}
const user2 ={
    name:"Piyush Sharma",
    year:"4rth",
}
const user3 ={
    name:"Archana Goel",
    year:"3rd",
}
 
function sayHi(degree,branch){
    console.log(this.name,degree,branch);
    
}

//using call , apply for explicit binding , they are unction methods
sayHi.call(user1,"B.TECH","CSE")
sayHi.call(user2,"BARCH","NULL")
sayHi.call(user3)
sayHi.apply(user3,["BTECH","ECE"])
//one more we have , bind function 
//It returns function, so we need to assign this with a variable

const bind_var=sayHi.bind(user1,"BTECH","CSE")
bind_var();