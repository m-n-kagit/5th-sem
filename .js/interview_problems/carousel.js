const slider = document.querySelectorAll(".carousel");
const nextBtn = document.querySelector(".btn-next");
const previousBtn = document.querySelector(".btn-prev");

let currentslide =0;
console.log(slider.length);

let maxSlide = slider.length - 1;

slider.forEach((image,index)=>(image.style.transform = 
    `translateX(${index*100}%)`
 ))

function nextButtonClick(){
    if(currentslide === maxSlide){
        currentslide=0;
    }
    else{
        currentslide++;
    }
    slider.forEach((image,index)=> image.style.transform = `translateX(${(index - currentslide)*100}%)`)
    console.log(currentslide);

    
}

function prevButtonClick(){
    if(currentslide === 0){
        currentslide=maxSlide;
    }
    else{
        currentslide--;
    }
    slider.forEach((image,index)=>image.style.transform=`translateX(${(index - currentslide)*100}%)`)
    console.log(currentslide);
}



nextBtn.addEventListener("click",nextButtonClick)
previousBtn.addEventListener("click",prevButtonClick)

