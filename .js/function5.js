//closure : It is a function that remembers
//its outer variables and can access them 

function x(){
    let a=5;
    function y(){
        console.log(a);
        // var a= 7;
    }
    y();
}

x()

