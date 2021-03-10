const fs = require('fs');
const _ = require('lodash');


function addNote(title, body) {

    var _notes = fetchNotes();

    var _note = {
        title,
        body
    };

    var is_dupl = _notes.filter((n) => (n.title === title)).length !== 0;
    if (is_dupl) {
        console.log(" - note already exists!");
        return null;
    }
    _notes.push(_note);

    saveNotes(_notes);
    return _note;
}

function removeNote(title) {

    var _notes = fetchNotes();

    var _notes_filtered = _notes.filter((n) => (n.title !== title));

    if (_notes_filtered.length === _notes.length) {
        console.log(" - requested title doesn't exist!");
        return false;
    }

    saveNotes(_notes_filtered);
    return true;
}

function getNote(title) {

    var _notes = fetchNotes();
    var _notes_filtered = _notes.filter((n) => n.title === title);

    return _notes_filtered[0]; // undefined(or null) if not there
    
}

function getAll() {

    var _notes = fetchNotes();
    return _notes;
}



function logNote( _note ){
    console.log('\n--');
    console.log(` - Title: ${_note.title}`);
    console.log(` - Body: ${_note.body}`);
}
function fetchNotes() {
    _notes = [];

    try {
        var _notes = JSON.parse(fs.readFileSync('notes_data.json'));
    } catch (e) { }

    return _notes;
}
function saveNotes(_notes) {
    fs.writeFileSync('notes_data.json', JSON.stringify(_notes));
}




module.exports = {
    addNote,
    getNote,
    getAll,
    removeNote,
    logNote
};