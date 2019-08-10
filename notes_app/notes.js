const fs = require('fs');
const getNotes =  () => {
    return 'your notes';
}

// function to add notes
const addNotes =  (_title, _body) => {
    const notesArr = loadNotes();
    
    const filterArr = notesArr.filter((note) => {
        return note.title === _title;
    });
  debugger;
    if (filterArr.length <= 0) {
        notesArr.push({
            title: _title,
            body: _body
        });
        saveNotes(notesArr);
        console.log('notes added success fully');
    } else {
        console.log('Duplicate notes');
    }

}

// Function to remove notes
const removeNotes = (_title) => {
    const notesArr = loadNotes();
    for(var i =0; i < notesArr.length; i++) {
        if(notesArr[i].title === _title) {
            notesArr.splice(i,1);
        } 
    }
   //  notesArr.splice(0,1);
    saveNotes(notesArr);
    console.log('Note removed successfuly.....');
}

const updateNotes =  (_title , _body) => {
    const notesArr = loadNotes();
    for(var i =0; i < notesArr.length; i++) {
        if(notesArr[i].title === _title) {
            notesArr[i].body = _body;
        } 
    }
   //  notesArr.splice(0,1);
    saveNotes(notesArr);
    console.log('Note update successfuly.....', );
}

const listNotes = function () {
    const notesArr = loadNotes();
    console.log('All Notes:-');
    for(var i =0; i < notesArr.length; i++) {
        console.log((i+1) + '. Title =', notesArr[i].title, '- Body =', notesArr[i].body);
    }
}

// Function to save notes
const saveNotes = (_noteArr) => {
    const noteStr = JSON.stringify(_noteArr);
    fs.writeFileSync('notes.json', noteStr);
}

// Function to load notes
const loadNotes = () => {
    try {
        const notesBuffer = fs.readFileSync('notes.json');
        const notesStr = notesBuffer.toString();
        return JSON.parse(notesStr);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    updateNotes: updateNotes,
    listNotes:listNotes
}