const app = require('./app');
const config = require('config');

const PORT = process.env.BACKEND_PORT || config.get('backendPort');

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
