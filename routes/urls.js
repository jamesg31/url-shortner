const express = require('express');

const urlController = require('../controllers/urls');
const router = express.Router();

router.get('/:url', urlController.getURL);
router.post('', urlController.postURL);

module.exports = router;