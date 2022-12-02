const express = require('express');
const path = require('path')

const { addNewNote, getNotes } = require('./Develop/Helpers/addNewNote')
const router = express.Router()

const app = express()
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('Develop/public'));

app.get('/', (req, res) => {
  console.log('here')
  res.send('hello')
  res.sendFile(path.join(__dirname, '/Develop/public/index.html'))

});


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))

});

app.get('/api/notes', (req, res) => {
  getNotes().then(noteData => res.json(JSON.parse(noteData)))

}
);

app.post('/api/notes', (req, res) => {

  const { title, text } = req.body
  const newNote = {
    title,
    text
  }
  addNewNote('Develop/db/db.json', newNote)
  getNotes().then(noteData => res.json(JSON.parse(noteData)))
});


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
