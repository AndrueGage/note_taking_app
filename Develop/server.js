const express = require('express');
const app = express();
const notesRoute = require('./routes/notes.js');
const homeRoute = require('./routes/home.js')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notesRoute);
app.use(homeRoute);
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);