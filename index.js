const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// In-memory notes database
let notes = [
    { id: 1, text: "Welcome to the Notes App!", createdAt: new Date().toISOString() },
    { id: 2, text: "Add your own notes below.", createdAt: new Date().toISOString() }
];

// GET endpoint to fetch all notes
app.get('/api/notes', (req, res) => {
    res.json(notes);
});

// POST endpoint to add a new note
app.post('/api/notes', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Note text is required' });
    }

    const newNote = {
        id: notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1,
        text,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

// Server health check
app.get('/', (req, res) => {
    res.json({ message: 'JotDown API is running!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});