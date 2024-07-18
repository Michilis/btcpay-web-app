const Store = require('../models/Store');
const User = require('../models/User');

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find({ user: req.user.id });
    res.json(stores);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addCredits = async (req, res) => {
  const userId = req.user.id;
  const { amount } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    user.credits += amount;
    await user.save();

    res.json({ credits: user.credits });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
