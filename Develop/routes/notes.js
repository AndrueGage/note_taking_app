const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const fs = require('fs')

router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(dbJson)
});

router.post('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('./db/db.json'));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync('./db/db.json', JSON.stringify(dbJson));
    res.redirect('/notes');
});

router.delete('/api/notes/:id', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('./db/db.json'));
    let id = req.params.id;
    let newArray = dbJson.filter(note => note.id !== id)
    fs.writeFileSync('./db/db.json', JSON.stringify(newArray));
    res.redirect('/notes');
});

module.exports = router;