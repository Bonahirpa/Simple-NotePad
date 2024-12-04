const noteArea = document.getElementById("noteArea");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const savedNote = document.getElementById("savedNote");

// Function to display the saved note
function displaySavedNote() {
  const savedNoteContent = localStorage.getItem("notepadNote");
  if (savedNoteContent) {
    savedNote.textContent = savedNoteContent;
  } else {
    savedNote.textContent = "No notes saved yet.";
  }
}

// Load saved notes on page load
window.addEventListener("load", () => {
  const savedNoteContent = localStorage.getItem("notepadNote");
  if (savedNoteContent) {
    noteArea.value = savedNoteContent;
  }
  displaySavedNote();
});

// Save the note
saveButton.addEventListener("click", () => {
  localStorage.setItem("notepadNote", noteArea.value);
  alert("Note saved!");
  displaySavedNote();
});

// Clear the note
clearButton.addEventListener("click", () => {
  noteArea.value = "";
  localStorage.removeItem("notepadNote");
//   alert("Note cleared!");
  displaySavedNote();
});
