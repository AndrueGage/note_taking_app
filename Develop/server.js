const express = require('express');
const path = require('path');
const app = express();
const notesRoute = require('./routes/notes');
const homeRoute = require('./routes/home')
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notesRoute);
app.use(homeRoute);
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);