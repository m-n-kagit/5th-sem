//for creating call and apply methods
const obj ={
    name : "Mohit",
    city:"Jaipur"

}

function displayUserInfo(state){
    console.log(`Hi i am ${this.name} and my city name is ${this.city}, ${state}`);
}

Function.prototype.myCall = function(context,...args){
    context.showMessage = this; //creating new attribute in that object
    context.showMessage(...args);
    delete context.showMessage;
};

//for apply
Function.prototype.myApply = function(context,args){
    context.showMessage = this;
    context.showMessage(...args);
    delete context.showMessage;
}

displayUserInfo.myCall(obj,"Rajasthan")
displayUserInfo.call(obj,"Rajasthan")
displayUserInfo.myApply(obj,["Rajasthan","Gujarat"])
displayUserInfo.apply(obj,["Gujarat"])

//for bind method
Function.prototype.myBind = function(context,...args)
{
        context.wrapperFunc = this;
        console.log(args);
        
        return function(...rest){
            context.wrapperFunc(...args,...rest)
            delete context.wrapperFunc;           
        }
}
const bindFunc = displayUserInfo.myBind(obj,"maha")
bindFunc()