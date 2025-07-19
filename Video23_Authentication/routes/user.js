const express = require('express')
const { handleUserSignup } = require('../controllers/user')
const router = express.Router();

router.post('/',)

//route to create a user
router.post('/',handleUserSignup);

module.exports = router;