let modal = document.querySelector(".container")
let button = document.querySelector(".button");

button.addEventListener("click", () =>{  
    modal.classList.remove("hide");

})

modal.addEventListener("click",(event)=>{
    const button = event.target.name;
    if(button === "close"){
        modal.classList.add("hide");
    }
})
