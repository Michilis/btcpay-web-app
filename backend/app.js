const express = require('express');
const { sequelize } = require('./models'); // Correct path to the models
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/subscriptions', require('./routes/subscriptions'));
app.use('/api/stores', require('./routes/stores'));

module.exports = app;
