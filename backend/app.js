const express = require('express');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const subscriptionRoutes = require('./routes/subscriptions');
const storeRoutes = require('./routes/stores');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/stores', storeRoutes);

module.exports = app;
