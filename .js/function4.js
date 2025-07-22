//Using map method of an array 
//used to do manipulation on each element of that array 
//return the new array
function square(num){
    return num**2;
}

let arr = [1,2,3,4]
let arr1 =arr.map(square)
console.log(arr1);
//by arrow func.
let arr2 = arr.map((num)=>{
    return num**2;
})

console.log(arr2);
