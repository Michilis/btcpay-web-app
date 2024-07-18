const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  btcpayStoreId: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Store', StoreSchema);
