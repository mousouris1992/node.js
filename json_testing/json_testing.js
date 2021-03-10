const fs = require('fs');

var someNote = {
    title: 'title',
    body: 'body'
};


fs.writeFileSync('notes.json', JSON.stringify(someNote));
var noteToString = fs.readFileSync('notes.json');
var noteJSON = JSON.parse(noteToString);
console.log(noteJSON.title);


// to: string
var person_toString = JSON.stringify({
    name: 'andrew',
    surname: 'james',
    age: 25
});

// to: json
var person_JSON = JSON.parse(  person_toString );

// print
//console.log(person_JSON);