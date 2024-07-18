const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  period: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
