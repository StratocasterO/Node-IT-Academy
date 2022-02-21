var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO això ha de retornar un JSON, no renderitzar un HTML
  res.render('index', { title: 'Express' });
});

module.exports = router;
