const express = require('express');
const { getStores, addCredits } = require('../controllers/storeController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getStores);
router.post('/add-credits', authMiddleware, addCredits);

module.exports = router;
