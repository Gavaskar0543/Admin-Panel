const express = require('express');
const router = express.Router();

/**route middleware */
router.use('/api',require('./api'));

module.exports = router;