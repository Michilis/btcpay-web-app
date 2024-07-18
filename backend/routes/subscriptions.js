const express = require('express');
const { subscribe, getSubscriptions } = require('../controllers/subscriptionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/subscribe', authMiddleware, subscribe);
router.get('/', authMiddleware, getSubscriptions);

module.exports = router;
