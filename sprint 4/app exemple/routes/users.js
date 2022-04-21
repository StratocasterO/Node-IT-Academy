var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // TODO això ha de retornar un JSON, no una string
  res.send('respond with a resource');
});

module.exports = router;
