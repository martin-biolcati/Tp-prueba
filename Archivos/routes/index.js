var express = require('express');
var router = express.Router();
const user = require('../controllers/index')

/* GET home page. */
router.get('/', user.index)

module.exports = router;
