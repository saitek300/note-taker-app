const express = require('express');
const noteData = require('./db/db.json')

const app = express()
const PORT = 3002;

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

app.post('/api/notes', (req, res) => res.json(noteData));


app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);
