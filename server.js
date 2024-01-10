// Variables for the required dependencies 
const express = require('express');
const app = express();
const notesRoute = require('./routes/notes.js');
const homeRoute = require('./routes/home.js')
// port in which the application will run on
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notesRoute);
app.use(homeRoute);
app.use(express.static('public'));

// A response to know that the application is properly running in the port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);