let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

child.addEventListener("click",(event)=>{
    alert("child tag")
});
parent.addEventListener("click",(event)=>{
    alert("parent tag")
}); // by defalut false after function, means event bubbling 
child.addEventListener("click",(event)=>{
    alert("child tag")
},true);

parent.addEventListener("click",(event)=>{
    alert("parent tag")
},true); //  true after function, means event capturing 
//used is in event delegation 