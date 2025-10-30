import { renderNotes } from "./app.js";

let arrayofNotes = JSON.parse(localStorage.getItem("notes"))
let showArchivedNotes =document.querySelector(".archive-notes-container")

showArchivedNotes.addEventListener("click",(event)=>{
    let type =event.target.dataset.type;
    let noteId = event.target.dataset.id;
    switch(type){
        case "del":
            arrayofNotes= arrayofNotes.filter(({id})=>id.toString() !== noteId)
            showArchivedNotes.innerHTML = renderNotes(arrayofNotes.filter(({isArchived}) => isArchived))
            localStorage.setItem("notes",JSON.stringify(arrayofNotes));
            break;
        case "archive":
            arrayofNotes= arrayofNotes.map(note=> note.id===noteId ?{...note,})
            showArchivedNotes.innerHTML = renderNotes(arrayofNotes.filter(({isArchived}) => isArchived))

    }

})

showArchivedNotes.innerHTML = renderNotes(arrayofNotes.filter(({isArchived}) => isArchived))
