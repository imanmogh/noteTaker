const router = require(`express`).Router();
const {notes} = require(`../../db/notes_db.json`);
const {createNote, deleteNote} = require(`../../lib/noteFunction`);

router.get(`./notes.html`, (req,res) => {
    req.body.id = notes.length.toString();
    let newNote = createNote(req.body, notes);
    res.json(newNote);
})
