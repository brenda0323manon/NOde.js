//Allows to grab from the chalk and fs files
const fs = require('fs')
const chalk = require('chalk')
//A function named getNotes that conatains a message
const getNotes = () => {
    return "Your notes..."
}



//Responsble to add notes to the notes.text, containing title and body
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title) //short hand
    const duplicateNote = notes.find((note) => note.title === title)
    // const duplicateNotes = notes.filter(function (note){
    //     return note.title === title //Will filter any message that is duplicated 
    // })

    if (!duplicateNote)  {
        notes.push({ //if its not duplicated it will push into the object
            title: title,
            body: body
        })
        saveNotes(notes) 
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()  //short Hand
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function (note) {
    //     return note.title != title ///Will keep anything that is not equal to any other title
    // })

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
    } else { ///will be able to remove any note according to the title 
        console.log(chalk.red.inverse('Note title taken!'))
    }
     saveNotes(notesToKeep)

}

const listNotes = () => { //making a list of all my notes in the notes.jason file
    const notes = loadNotes()

    console.log(chalk.inverse('Notes list'))
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    //reading the note if founf will appear in the console
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
     
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJSON) /// Save any new notes in the notes.json file
}

 const loadNotes  = () => {
    try { //Will catch any erros - Buffers
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return  []
    }
 }

//It allows to export the function named getNotes
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNote,
    listNotes: listNotes,
    readNote: readNote
}