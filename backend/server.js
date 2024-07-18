require('dotenv').config();
const app = require('./app');

const PORT = process.env.BACKEND_PORT || 5005;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
