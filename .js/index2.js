let btnContainer = document.querySelector(".btn_container");

btnContainer.addEventListener("click",(event)=>{
    console.log(event.target.innerText);
    let btnText = event.target.innerText;
    if(btnText ==="RED"){
        event.target.classList.toggle("btn-red");
    }
    if(btnText ==="YELLOW"){
        event.target.classList.toggle("btn-y");
    }
    if(btnText ==="GREEN"){
        event.target.classList.toggle("btn-g");
    }

})