// //Destructing Object 
// const employess = {
//     engineer : {
//         em1:{
//             id : 1,
//             name:"Kushal",
//             occupation: "Junior Software Engineer",


//         },
//         em2:{
//             id :2,
//             name: "Harsh",
//             occupation: "Senior Software Engneer"
//         }
//     },
//     youtube : {
//         em3:{
//             id:3,
//             name:"Kunal",
//             occupation:"Youtube Manager"
//         }
//     }
// }

// let {youtube : {em3:{name,hobby}}} = employess
// console.log(name,hobby);
// // console.log(em3); returns error 


// //Object methods 
// const obj ={
//     name: "Prakash",
//     age:99,
//     city:"Mumbai"
// } 

// const entries = Object.entries(obj); //returns array of arrays
// console.log(entries);
// const val = Object.values(obj);
// console.log(val);
// const num ={
//     1:3,
//     2:65,
//     3:1
// }
// //having a sum of values in this object 
// let sum =0
// for (let key in num){
//     sum+=num[key]
// }
// console.log(sum);

// //another method 
// const val1 = Object.values(num);

// console.log(val1);

// //this keyword
// const user1 = {
//     name: "Keshav",
//     showName: function (){
//         console.log(this.name);
        
//     }
// }

// user1.showName();

// const user2 ={
//     name:"JaiKumar",
//     showName : ()=>{
//         console.log(this.name); //'=>' doesnot point to the regular object so result nothing.
//     }
// }


// user2.showName()

// //use of new keyword
// function Newfunc(){
//     (this.name = "Mohit Sharma"),
//     (this.sem = "Vth"),
//     this.func = function(){
//         console.log("Hello");
        
//     } 
// }

// const a = new Newfunc();
// console.log(a);
// console.log(a.name);
// console.log(a.sem);
// const b= Newfunc;
// console.log(b);
// a.func()

//ex -1
function displayName(){
    console.log(this);
    
}

// const user = {
//     name:"Mohit",
//     showName : displayName
// }
// console.log(user);

//ex -2

const user4 = {
    name:"Keshav",
    showName: function(){ 
        displayName() //shows global object 
    }
}

user4.showName()
 
//ex-03
const displayName2 = () => {
    console.log(this);
}

const user2 = {
    name:"Raghav"
}

displayName2.apply(user2) //shows global object as it is an aarrow function

//ex-04
const person = {
    name : "Garvit",
    sayHi: function (){
        console.log(`Welcome ${this.name}`);
        
    }



}

person.sayHi()

//ex-06

const person2 ={
    name : "Prakash",
    sayHi : function(){
        console.log(`Welcome ${this.name}`);
        
    }
}

const personf = person2.sayHi
console.log(person2.sayHi());
// personf() //as this is a normal function , so this will be of global object 
