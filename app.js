console.log('Starting app js');

const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe:'Title of note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe:'The body of note',
  demand:true,-
  alias:'b'
};

const argv = yargs
             .command('add', 'Add new note',{
               title: titleOptions,
               body: bodyOptions
             })
             .command('list', 'List all notes')
             .command('read', 'Read a note', {
               title: titleOptions,
               body: bodyOptions
             })
             .command('remove', 'Remove a note', {
               title: titleOptions
             })
             .help()
             .argv;
//console.log('yargs', argv);

var command = process.argv[2];

switch (command) {
    case 'add':
        var note = notes.addNotes(argv.title, argv.body);
        if(note){
            console.log("note created");
            notes.logNote(note);
        } else {
          console.log('Note title taken');
        }
        break;
    case 'remove':
        var noteRemoved = notes.remove(argv.title);
        var message = noteRemoved ? 'note was removed' : 'note not found';
        console.log(message);
        break;
    case 'list':
        var allNotes = notes.getAll();
        console.log(`printing ${allNotes.length} notes(s).`);
        allNotes.forEach((note) => notes.logNote(note));
        break;
    case 'read':
        var note = notes.read(argv.title);

        if(note){
            console.log('Note found');
            notes.logNote(note);

        }else{
          console.log('Note not found');
        }
        break;
}
