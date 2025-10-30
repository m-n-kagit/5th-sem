let container = document.querySelector(".container")

const throttle = (callback , delay) => {
    let isWaiting =false;
    return (...args) =>{
        if(isWaiting) return; //ignoring the in-between scrolls happened in specicified time out. 
        callback(...args);
        isWaiting=true;
        setTimeout(()=>{
            isWaiting = false;
        },delay)
    }
}

const handleScroll = () =>{
    console.log("scrolled");
}

const throttleScroll = throttle(handleScroll,500)


container.addEventListener("scroll",throttleScroll)
