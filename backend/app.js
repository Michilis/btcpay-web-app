const express = require('express');
const { sequelize } = require('./models');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/subscriptions', require('./routes/subscriptions'));
app.use('/api/stores', require('./routes/stores'));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    app.listen(5000, () => console.log('Server started on port 5000'));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
