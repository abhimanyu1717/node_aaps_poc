
const yargs = require('yargs');
const {addNotes, getNotes, removeNotes, updateNotes, listNotes} = require('./notes.js');
yargs.version('1.1.0');

// Create add commnad
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Notes title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Notes body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        addNotes(argv.title, argv.body);
    }
});

// Create update commnad
yargs.command({
    command: 'update',
    describe: 'update a note',
    builder: {
        title:{
            describe:'Notes title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Notes body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        updateNotes(argv.title, argv.body);
    }
});

// Create remove command command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title:{
            describe:'Notes title',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        removeNotes(argv.title);
    }
});



// Createc update list
yargs.command({
    command: 'list',
    describe: 'list note',
    handler: () => {
        listNotes();
    }
});

// Createc update read
yargs.command({
    command: 'read',
    describe: 'read note',
    handler: () => {
        console.log('read note');
    }
});

// Createc dummy read
yargs.dummy({
    command: 'read',
    describe: 'read note',
    handler: () => {
        console.log('read note');
    }
});
yargs.parse();
//console.log(yargs.argv);

