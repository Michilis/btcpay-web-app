const Subscription = require('../models/Subscription');
const Store = require('../models/Store');
const User = require('../models/User');
const { sendBtcpayInvite, createBtcpayStore, generateInvoice } = require('../utils/btcpay');
const config = require('config');

exports.subscribe = async (req, res) => {
  const userId = req.user.id;
  const { email } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    user.email = email;
    await user.save();

    const btcpayUser = await sendBtcpayInvite(email);
    user.btcpayUserId = btcpayUser.id;
    await user.save();

    const btcpayStore = await createBtcpayStore(btcpayUser.id, email);
    user.btcpayStoreId = btcpayStore.id;
    await user.save();

    const price = config.get('priceEur');
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const subscription = new Subscription({
      user: userId,
      period: 'monthly',
      price,
      expiresAt
    });

    await subscription.save();

    const invoice = await generateInvoice(btcpayStore.id, email);
    res.json({ invoiceUrl: invoice.url });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ user: req.user.id });
    res.json(subscriptions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
