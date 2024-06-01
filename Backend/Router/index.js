const express = require('express');
const router = express.Router();

/**route middleware */
router.use('/api',require('./api'));
/**check server status */
router.get('/server-status',(req,res)=>{
    return res.json({
        status:'ok'
    })
})

module.exports = router;