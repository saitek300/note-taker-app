const fs = require('fs');

const getNotes =() =>{
   return fs.promises.readFile('./db/db.json','utf8')
}
const addNewNote = (storedNotes, addNote) => {
    fs.readFile(storedNotes, 'utf8', (err, data) => {
        if (err) {
            console.log('there was an error')
        } else {
            console.log('test')
            const parsedNotes = JSON.parse(data)
            parsedNotes.push(addNote)

            fs.writeFile(storedNotes, JSON.stringify(parsedNotes, null, 2), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('success')
                }
            })
        }
    })
}

module.exports = {addNewNote,getNotes};