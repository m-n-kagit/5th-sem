let formdata = document.querySelector(".form");
let submit_btn = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyfield = document.querySelectorAll(".empty-field");
let firstName, lastName, email, passcode;
let fntarget,lntarget,etarget,pwdtarget;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\w{2,3})+$/;
let passcodeRegex = /^(?=.*\d) (?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

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
    case "lastname":
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
    emptyfield[0].classList.add("d-none");
    if (!nameRegex.test(firstName)) {
        //return true or false value if the regex matches
        fntarget.classList.add("error");
        console.log("Name must only contain alphabets");
        errorMessages[0].classList.remove("d-none");
    } else {
        errorMessages[0].classList.add("d-none");
        console.log("good to go");
    }
}
else{
      emptyfield[0].classList.remove("d-none");

  }

  if (lastName) {
      emptyfield[1].classList.add("d-none");

    if (!nameRegex.test(lastName)) {
      console.log("LastName must only contain alphabets");
      lntarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
    } else {
      console.log("good to go");
      errorMessages[1].classList.add("d-none");
    }
  }
  else{
    emptyfield[1].classList.remove("d-none");
  }
  if (email) {
    emptyfield[2].classList.add("d-none");
    
    if (!emailRegex.test(email)) {
      console.log("Invalid account");
      errorMessages[2].classList.remove("d-none");
      etarget.classList.add("error");
        } else {
          console.log("good to go");
          errorMessages[2].classList.add("d-none");
        }
      }
      else{
        emptyfield[2].classList.remove("d-none");
        
      }
      if (passcode) {
        emptyfield[3].classList.add("d-none");
        
      if (!passcodeRegex.test(passcode)) {
      pwdtarget.classList.add("error");
      console.log("Password not valid");
      errorMessages[3].classList.remove("d-none");
    } else {
      console.log("good to go !");
      errorMessages[3].classList.add("d-none");
    }
  }
  else{
    console.log("Please fill the field");  
    emptyfield[3].classList.remove("d-none");
  } 
});
