//sum of all numbers from 1-20

function calculateSum(n){
    if(n==1){
        return 1
    } 
    return n+ calculateSum(n-1)

}

const result= calculateSum(20)
console.log(result);
