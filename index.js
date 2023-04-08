const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const products = require('./products.json');

app.get('/', (req, res) => {
    res.send('jewellery server running');
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log('Jewellery server running', port);
})