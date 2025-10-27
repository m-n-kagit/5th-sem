export const renderNotes = (notes) => {
  let newNote = notes.map(({ id, note, title, isPinned, isArchived }) => {
    return `<div class="single-note">
                <div class="d-flex align-center title-container">
                <span class = "single-note-title">${title}</span>
                <button class="button del-btn v-hidden" data-type="del" data-id=${id}>
                <span data-type="del" data-id=${id} class="material-icons-outlined">
                delete</span>
                </button>
                </div>
                <p>${note}</p>
                <div class="options d-flex gap-md">
                <button class="button btn pinned-btn v-hidden">
                    <span class=${isPinned ?  "material-icons" : "material-icons-outlined"} data-type="pinned" data-id=${id} >
                    push_pin
                    </span>
                </button>
                <button data-type="archive" data-id=${id} class="button btn pinned-btn v-hidden">
                <span data-type="archive" data-id=${id} class="material-icons-outlined">
                    archive
                </span>
                </button>
                </div>
                </div>`
  })
  newNote =newNote.join(""); // changing from array to string 
  return newNote;
};
