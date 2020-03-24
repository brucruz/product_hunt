const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'Heali',
        description: 'Buscador de preços de exames médicos',
        url: 'https://heali.me'
    });
    
    return res.send('Hello Heali');
});

app.listen(3001);