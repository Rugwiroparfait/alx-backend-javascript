const express = require('express');
const app = express();

// Existing root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// New cart endpoint with ID validation (only numbers allowed)
app.get('/cart/:id([0-9]+)', (req, res) => {
    const id = req.params.id;
    res.send(`Payment methods for cart ${id}`);
});

// Invalid cart ID
app.use('/cart/:id', (req, res) => {
    res.status(404).send('Invalid cart ID');
});

app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});
