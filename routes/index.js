var express = require('express');
var data = require('../controller/usercontroller')
var router = express.Router();

router.post('/insert',data.insert)


module.exports = router;
