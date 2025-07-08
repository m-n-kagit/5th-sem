// //Implementation of array and set 
// const arr1 = Array();
// arr1.push(1);
// arr1.push(2);
// arr1.push(1);
// arr1.push(1);
// console.log(arr1);

// const Id = new Set(); //no order maintained so no indexing acsess system  
// Id.add(1);
// Id.add(2);
// Id.add(1);
// Id.add(1);
// console.log(Id);
 
//you can convert an Set to an array
//and array to set , Lets see this below
// const stuId= [1,2,3,3,4,4,4];

// const unistuId = new Set(stuId);
// console.log(unistuId);
// //for searching the elements, we change it to array

// const  newunistuID= [...unistuId]; // ... spread operator

// let newuniId= new Array(unistuId)

// console.log(newuniId);
// console.log(newunistuID);

// const newlist = new Set();
// newlist.add(1);
// newlist.add(2);
// //newlist.clear()
// //newlist.delete(1);

// console.log(newlist.values());
// console.log(newlist.keys());
// console.log(newlist.entries());
// console.log(newlist.has(1)); //true or false

// newlist.forEach((value) =>
// {
//     console.log(value);
//     console.log({value});
    
// }
// )

// let arr=[1,2,3,4]
// let b=[3,2,1,4]
// let c  = arr.concat(b)
// let d=arr.pop()
// console.log(d);
// let s = arr.slice(0,3)
// console.log( typeof s); //returns object
// console.log(typeof arr[0]); //returns number 

// let name = "Prakash"
// console.log(name.slice(1,4));
// //splice method 
// let arr2 = ['html',"css",3,5.4,"9"]
// console.log(arr2);
// arr2.splice(2,0) // (index,that index and after that index how many elements to remove)
// arr2.splice(2,0,"added") // (index,that index and after that index how many elements to remove,add an element )
// console.log(arr2.includes("added"));

// console.log(arr2);

// const arr3 = [11,10,100,3,4]
// arr3.sort() // according to UTF -16 code
// console.log(arr3); 
// arr3.sort((a,b) => a-b)
// console.log(arr3);
// console.log(arr3.join("")); //change it into  a string 
// const arr4 =[ ...arr , ...arr2,...arr3,5,6]
// console.log(arr4);
const [a,a2,a3] = [1,2,3] //destructing 
console.log(a);
console.log(a2);
console.log(a3);
const [,,,z]=[1,2,3,4] // i.e at the fourth index 
console.log("z=",z);
const [c1,c2,...rest]=["hari","Golu",5,4,1,10,5]
console.log(c1);
console.log(c2);
console.log(rest);
let rest_arr = [...rest] //spread operator 
console.log(rest_arr)
let b1=2;
let b2=3; 
[b1,b2] = [b2,b1] //swaping 
console.log(b1); 
console.log(b2);







