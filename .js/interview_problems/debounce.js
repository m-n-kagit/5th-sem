let input = document.querySelector(".input")

function inputHandler(event){
    console.log(event.target.value);
}

function debounce(callback,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            callback(...args);
        },delay);
    }
}

const debounce_input_handler = debounce(inputHandler,500);

input.addEventListener("keyup",debounce_input_handler);
