const path = require(`path`);
const fs = require('fs');

function createNote(note, noteArray) {
    noteArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/notes_db.json'),
    JSON.stringify({
        notes: noteArray
    }, null, 2)
    )
    return note
}

function deleteNote(noteArray, id) {
    let deleteId = parseInt(id);
    noteArray.splice(deleteId, 1);

    for(let i = deleteId; i < noteArray.length; i++){
        noteArray[i].id = i.stringify();
    }
    fs.writeFileSync(path.join(__dirname, '../db/notes_db.json'),
    JSON.stringify({
        notes: noteArray
    }, null, 2)
    )
}

module.exports = {createNote, deleteNote}