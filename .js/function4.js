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
let arr2 = arr.map(num => num**2
);


console.log(arr2);

let arr3 =arr.filter(num=> num<5);
console.log(arr3);

//reduce method 
const sum = (acc,curr) => acc+curr;

const n = arr.reduce(sum,0)
console.log(n);

//arguement object 
function showvalue(a,b){
    console.log(a,b);
    console.log( arguments[0]); // funtion contains arguement object 
    console.log(arguments[5]); //shows 6 
    console.log(arguments); //it's array like object.
    
}
//see ur copy for more arguements usage 

showvalue(1,2,3,4,5,6); //no error 

//rest parameter 

function calculate(a,b,...rest){
    console.log(a,b);
    console.log(rest);

}

calculate(4,5,6,7,8,9);
