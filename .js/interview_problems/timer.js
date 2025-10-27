const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

let seconds =0, minutes=0, hours =0;
let int_id;
function handle(event){
    const button = event.target.name;
    if(button === "start"){
        int_id=setInterval(()=>{
            seconds++;
            if(seconds > 59){
                seconds=0;
                minutes++;
            }
            if(minutes > 59){
                minutes=0;
                hours++;
            }
            currentTime.innerText = ` ${hours<10 ? `0${hours}` : hours} : ${minutes<10 ? `0${minutes}`: minutes} : ${seconds<10 ? `0${seconds}` : seconds}`;
        },100);
    }
    if(button === "stop"){
        clearInterval(int_id);
    }
    if(button === "reset"){
        clearInterval(int_id);
        seconds=minutes=hours=0;
        currentTime.innerText = ` ${hours<10 ? `0${hours}` : hours} : ${minutes<10 ? `0${minutes}`: minutes} : ${seconds<10 ? `0${seconds}` : seconds}`;
    } 
}

buttonParent.addEventListener("click", handle);



