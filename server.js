require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Ensure your .env file has MONGODB_URI
mongoose.connect(process.env.MONGODB_URI);

const Pokemon = mongoose.model('pokemon', new mongoose.Schema({
    name: String,
    type: String,
    level: Number,
    nature: String
}));

app.post('/api/pokemon', async (req, res) => {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.send(pokemon);
});

app.get('/api/pokemon', async (req, res) => {
    const allPokemon = await Pokemon.find();
    res.send(allPokemon);
});

app.listen(3000, () => console.log('Server running on port 3000'));