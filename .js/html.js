const parentElement = document.getElementById("parent_container")

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

//creating card image element

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image")
cardImageElement.setAttribute("src", "scenery.jpg")

cardImageElement.setAttribute("alt","travel-card");

cardContainer.appendChild(cardImageElement)
parentElement.appendChild(cardContainer)
const textElement =  document.createElement("span");
textElement.innerText = "The following painting is made by me.";

cardContainer.appendChild(textElement);