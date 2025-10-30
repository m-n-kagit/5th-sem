//DOM
let startBtn = document.getElementById("btn-start");
console.log(startBtn);
let stopBtn = document.getElementById("btn-stop");
console.log(stopBtn);

let startb1 = document.querySelector(".start")
console.log(startb1);

let butt =document.querySelectorAll(".button");
console.log(butt[0]);

startBtn.addEventListener("click",()=>{
    // if(startBtn.innerText==="Start"){
        
    //     startBtn.innerText = "Stop";
    //     startBtn.classList.add("start_active");
    // }
    // else{
    //     startBtn.classList.remove("start_active");
    //     startBtn.innerText = "Start";
    // }
    startBtn.classList.toggle("start_active");
    // startBtn.innerHTML = `<span>Lets begin </span>`
})

let input = document.querySelector(".input");
input.addEventListener("change",()=>{
    console.log(input.value);
    
})
input.addEventListener("focus",()=>{
    console.log(input.value);
})
// input.addEventListener("input",()=>{
//     console.log(input.value);
// })
// input.addEventListener("keyup",()=>{
//     console.log(input.value);
    
// })

// mouse events 
// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button);
// })

// document.body.addEventListener("mousedown",(event)=>{
//      let xpos = event.clientX;
//     let ypos = event.clientY;
//     console.log(`xcore:${xpos} ` ,`ycore:${ypos}`);
// }
// )
// input.addEventListener("mousedown",(event)=>{
//     let xpos = event.clientX;
//     let ypos = event.clientY;
//     console.log(`xcore:${xpos} ` ,`ycore:${ypos}`);
    
// })



