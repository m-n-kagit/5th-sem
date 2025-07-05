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
 
// //you can convert an Set to an array
// //and array to set , Lets see this below
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

let arr=[1,2,3,4]
let b=[3,2,1,4]
console.log(arr==b);
