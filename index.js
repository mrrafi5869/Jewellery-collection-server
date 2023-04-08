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
    res.send(products);
})

app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const category_products = products.filter(product => product.type === id);
    res.send(category_products);
})

app.listen(port, () => {
    console.log('Jewellery server running', port);
})