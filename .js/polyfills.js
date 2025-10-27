//creating map function 
function square(num){
    return num**2;
}

Array.prototype.myMap = function(callback){
    let tempArr=[];
    for(let i=0;i<this.length;i++){
        tempArr.push(callback(this[i],i,this))
    }
    return tempArr;
}

let arr=[11,2,3,4];
const squareArr1 = arr.myMap(square);
console.log(squareArr1);
 
function check(num){
    if(num>3){
        return true;
    }
}

Array.prototype.myFilter = function(){
    let temparr=[]
    for(let i=0;i<this.length;i++){
        if(check(this[i])){

            temparr.push(this[i])
        }
    }
    return temparr;
}



const result = arr.myFilter();
console.log(result);

arr = [1,2,3,4,5,6];

function getSum(acc,curr){
    return acc+curr;
}
//reduce method in array

const total = arr.reduce(getSum,3) // reduce(callback_func,initial_value)
console.log(total);

Array.prototype.myReduce = function(callback,initial_value){
    if(typeof(callback)== "function"){
        let acc = initial_value ? initial_value  : this[0];
        for(let i=initial_value ? 0:1 ; i<this.length;i++){
            acc= callback.call(this,acc,this[i],i);
        } 
        return acc;

    }
    else{
        return "first arguement not a function";
    }
}
let t = arr.myReduce(getSum,2); 
console.log(t);

//Pollyfill of flat method in array 
arr = [1,2,3,4,[5,6],[[[7,8]]]]

t= arr.flat(2)
// console.log(t);
Array.prototype.myFlat = function(depth=1){
    let tempArr=[];
    function getFlattendArr(array,depth){
        for( let element of array){
            if(Array.isArray(element) && depth){
                getFlattendArr(element,depth-1)
            }
            else{
                tempArr.push(element);
            }
        }
    }
    getFlattendArr(this,depth);
    return tempArr;
};

t = arr.myFlat(1)
console.log(t);



