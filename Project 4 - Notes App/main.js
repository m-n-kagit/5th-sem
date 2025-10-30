import { renderNotes } from "./app.js" 
let note =document.querySelector(".note");
let title = document.querySelector(".title");
let addNoteButton = document.querySelector(".add-btn");
let notesDisplay = document.querySelector(".notes-display")
let showOtherNotes = document.querySelector(".notes-container")
let showPinnedNotes = document.querySelector(".pinned-notes-container")
// let arrayOfNotes = [{title: "todo", note:"abcdxsbkabjd",id:"123",isPinned:false}];
let pinTitle =document.querySelector(".pin-title");
let otherTitle = document.querySelector(".other-title")


let arrayOfNotes = JSON.parse(localStorage.getItem("notes")) || []

if(arrayOfNotes.length>0){
   pinTitle.classList.remove("d-none");
   otherTitle.classList.remove("d-none");
}


notesDisplay.addEventListener("click",(event)=>{
   let type = event.target.dataset.type;
   let noteId = event.target.dataset.id;
   console.log(type,noteId);
   switch(type){
      case "del":
         arrayOfNotes= arrayOfNotes.filter(({id})=>id.toString() !== noteId)
         showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=> !isPinned && !isArchived));
         showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned})=> isPinned));
         localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
         break;
      case "pinned":
         arrayOfNotes = arrayOfNotes.map(note => note.id.toString()=== noteId ? {...note,isPinned:!note.isPinned} : note); //overrides the isPinned property with the opposite boolean value (toggle).
         showOtherNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned,isArchived})=> !isPinned && !isArchived))
         showPinnedNotes.innerHTML = renderNotes(arrayOfNotes.filter(({isPinned})=> isPinned))
         console.log(arrayOfNotes);
         break;
      case "archive":
         arrayOfNotes = arrayOfNotes.map(note => note.id.toString() === noteId ? {...note,isArchived: !note.isArchived}: note);
         showOtherNotes.innerHTML =renderNotes(arrayOfNotes.filter(({isArchived,isPinned})=> !isArchived && !isPinned))
         localStorage.setItem("notes",JSON.stringify(arrayOfNotes));
         break;
      }
}) 


addNoteButton.addEventListener("click",()=>{

   if(note.value.trim().length > 0 || title.ariaValueMax.trim().length >0){
    arrayOfNotes = [...arrayOfNotes,{id: Date.now(),title: title.value.trim(),note:note.value.trim(), isPinned:false,isArchived:false}]
    showOtherNotes.innerHTML = renderNotes(arrayOfNotes)
    note.value = title.value ="";
    localStorage.setItem("notes",JSON.stringify(arrayOfNotes)); //changing into string then storing it in the local storage because 
    // of the thing that in array type the stored item is shown as -- "Object object" 
   }
   if(arrayOfNotes.length>0){
   pinTitle.classList.remove("d-none");
   otherTitle.classList.remove("d-none");
}   
})
showOtherNotes.innerHTML=renderNotes(arrayOfNotes)