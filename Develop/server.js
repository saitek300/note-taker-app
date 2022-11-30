const express = require('express');
const path = require('path')
const noteData = require('./db/db.json')
const addNewNote = require('./Helpers/addNewNote')
const router = express.Router()

const app = express()
const PORT = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('here')
  res.send('hello')
  res.sendFile(path.join(__dirname, '/public/index.html'))

});


app.get('/notes', (req, res) => {
  res.send('Hi')
  res.sendFile(path.join(__dirname, '/public/notes.html'))

});

app.get('/api/notes', (req, res) => res.json(noteData));

app.post('/api/notes', (req, res) => {
  res.json(noteData);
  const { title, text } = req.body
  const newNote = {
    title,
    text
  }
  addNewNote('./db/db.json', newNote)
});


app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
