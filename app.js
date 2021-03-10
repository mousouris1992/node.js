const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require ('./notes.js');

const argv = yargs.argv;
var command = argv._[0];


if(command === 'add'){
    var note = notes.addNote(argv.title, argv.body);

    if(note){
        console.log('\n\n - note succesfully added!');
        console.log(note);
    }else{
        console.log(' - note could not get added!');
    }
}
else if(command === 'remove'){
    var status = notes.removeNote(argv.title);

    if(status){
        console.log(' - note succesfully removed!');
    }else{
        console.log(' - note could not get removed!');
    }
}
else if(command === 'get'){
    var note = notes.getNote(argv.title);

    if(note){
        notes.logNote(note);
    }else{
        console.log('\n - note request failed!');
    }
}
else if(command === 'list'){

    console.log('\n\n ---- notes ---- ');
    var _notes = notes.getAll();
    _notes.forEach(n => notes.logNote(n));
}
else{
    console.log(" - command not recognized!");
}
