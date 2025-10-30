// //object reference shallow copy
const person1 ={
    name:"Mohit",
    class:"3rd yr ",
    address: {
        city: "Jaipur",
        state: "Raj"
    }
}

// const person2 =person1 //shallow copy 
// person2.name = "Tushar"
// person2.class = "4rth"

// console.log(person2);
// console.log(person1);

//to avoid this , deep copy is used
//But the below one is not deep copy,not have deep copy of nested object 
const person3 =Object.assign({},person1) //copy all the property and paste in this empty object
person3.name= "Ganesh"
person3.class = "2nd"
person3.address.city ="Bhopal"
person3.address.state = "MP"
console.log(person1); //results the same address of person3 
console.log(person3);  // as the inner object is pointing to same memory address

//Optional chaining 

//sol1
// if(person1.address !==undefined){
//     console.log(person1.address.city);
    
// }

// else{
//     console.log("Address not available.");
    
// }
//Sol2 
console.log(person1.address?.city);
console.log(person1.function_any?.()); //results undefined if the function doesnot exit
console.log(person1["address"]?.city);


