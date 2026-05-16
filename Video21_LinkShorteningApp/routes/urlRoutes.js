// routes/urlRoutes.js
const express = require('express');
const router = express.Router();
const { shortenUrl, redirectUrl, getAllUrls } = require('../controllers/urlController');

router.post('/shorten', shortenUrl);
router.get('/all', getAllUrls);
router.get('/:short', redirectUrl);

module.exports = router;