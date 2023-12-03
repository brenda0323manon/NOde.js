const chalk = require('chalk')//Allows to grab from the npm package chalk
const yargs = require('yargs')//Allows to grab from the npm package yargs 
const notes  = require('./notes.js') //Allows to grab from the file notes.js
const { notDeepStrictEqual } = require('assert')


//Customize yargs version 
yargs.version('1.1.0')

//Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: { //Title of my notes
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: { //body of my notes
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
      notes.addNotes(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove the note',
    builder: { 
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNotes(argv.title)
    }
})

//read command
yargs.command({
    command: 'read',
    describe: 'Reading the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'list of note',
    handler(argv) { ///How it's going to handle the information (in a function)
        notes.listNotes()
    }
})




yargs.parse()