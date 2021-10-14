const express = require('express');

const authController = require('../controllers/auth');
const router = express.Router();

router.post('/google', authController.postGoogle);

module.exports = router;