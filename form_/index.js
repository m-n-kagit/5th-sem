let formdata = document.querySelector(".form");
let submit_btn = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfield = document.querySelectorAll(".empty-field");
let firstName, lastName, email, passcode;
let fntarget,lntarget,etarget,pwdtarget;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/;
let passcodeRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let showPasswordBtn = document.querySelector(".btn");
let nflag=false, sflag=false,eflag=false,pflag =false;


for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}

for (let empty of emptyfield) {
  empty.classList.add("d-none");
}
formdata.addEventListener("keyup", (event) => {
  event.preventDefault();
  field = event.target.dataset.key;
  switch (field) {
    case "firstName":
      firstName = event.target.value;
      fntarget = event.target;
      break;
    case "lastName":
      lastName = event.target.value;
      lntarget =event.target;
      break;
      case "email":
        email = event.target.value;
        etarget =event.target;
        break;
        case "password":
          passcode = event.target.value;
          pwdtarget =event.target;
      break;
    default:
      firstName = lastName = email = passcode = "";
  }
});

submit_btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(firstName, lastName, email, passcode);
  if (firstName) {
    console.log(firstName);
    emptyfield[0].classList.add("d-none");
    if (!nameRegex.test(firstName)) {
        //return true or false value if the regex matches
        console.log("Name must only contain alphabets");
        errorMessages[0].classList.remove("d-none");
        fntarget.classList.add("error");
      } else {
        fntarget.classList.remove("error");
        errorMessages[0].classList.add("d-none");
        console.log("good to go");
        nflag=true;
      }
    }
    else{
      console.log("Please fill the form");
      emptyfield[0].classList.remove("d-none");
      fntarget.classList.remove("error");
  }

  if (lastName) {
      emptyfield[1].classList.add("d-none");

    if (!nameRegex.test(lastName)) {
      console.log("LastName must only contain alphabets");
      errorMessages[1].classList.remove("d-none");
      lntarget.classList.add("error");
    } else {
      lntarget.classList.remove("error");
      console.log("good to go");
      errorMessages[1].classList.add("d-none");
      sflag=true;
    }
  }
  else{
    emptyfield[1].classList.remove("d-none");
    lntarget.classList.remove("error");
  }
  if (email) {
    emptyfield[2].classList.add("d-none");
    
    if (!emailRegex.test(email)) {
      console.log("Invalid account");
      errorMessages[2].classList.remove("d-none");
      etarget.classList.add("error");
    } else {
      etarget.classList.remove("error");
      console.log("good to go");
      errorMessages[2].classList.add("d-none");
      eflag=true;
    }
  }
  else{
    emptyfield[2].classList.remove("d-none");
    etarget.classList.remove("error");
    
  }
  if (passcode) {
    emptyfield[3].classList.add("d-none");
    
    if (!passcodeRegex.test(passcode)) {
      console.log("Password not valid");
      errorMessages[3].classList.remove("d-none");
      pwdtarget.classList.add("error");
    } else {
      console.log("good to go !");
      pwdtarget.classList.remove("error");
      errorMessages[3].classList.add("d-none");
      pflag=true;
      }
    }
    else{
      console.log("Please fill the field");  
      emptyfield[3].classList.remove("d-none");
      pwdtarget.classList.remove("error");
  } 
  if(nflag==true && sflag==true && eflag==true && pflag==true){
    window.location.href = "./success.html";
  }
});


showPasswordBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    if(pwdtarget.getAttribute("type")=== "text"){
      pwdtarget.setAttribute("type","password")    
    }
    else{
      pwdtarget.setAttribute("type","text");
    }
})