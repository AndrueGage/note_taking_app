// Variables for the required dependencies and a route
const router = require('express').Router();
const path = require('path');
// Using the GET method to take you to the home.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// Using the GET method to take you to the notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;

