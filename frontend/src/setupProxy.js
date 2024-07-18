const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('config');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://localhost:${process.env.BACKEND_PORT || config.get('backendPort')}`,
      changeOrigin: true,
    })
  );
};
