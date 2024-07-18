const axios = require('axios');
const config = require('config');

const BTCPAY_SERVER_URL = config.get('btcpayServerUrl');
const BTCPAY_API_KEY = config.get('btcpayApiKey');
const PRICE_EUR = config.get('priceEur');

async function sendBtcpayInvite(email) {
  const response = await axios.post(`${BTCPAY_SERVER_URL}/api/v1/users`, { email }, {
    headers: { Authorization: `token ${BTCPAY_API_KEY}` }
  });
  return response.data;
}

async function createBtcpayStore(userId, email) {
  const response = await axios.post(`${BTCPAY_SERVER_URL}/api/v1/stores`, {
    name: `Store_${email}_${Date.now()}`,
    defaultCurrency: 'BTC'
  }, {
    headers: { Authorization: `token ${BTCPAY_API_KEY}` }
  });
  return response.data;
}

async function generateInvoice(storeId, email) {
  const response = await axios.post(`${BTCPAY_SERVER_URL}/api/v1/stores/${storeId}/invoices`, {
    amount: PRICE_EUR,
    currency: 'EUR',
    metadata: {
      email: email
    }
  }, {
    headers: { Authorization: `token ${BTCPAY_API_KEY}` }
  });
  return response.data;
}

module.exports = {
  sendBtcpayInvite,
  createBtcpayStore,
  generateInvoice
};
