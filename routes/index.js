var express = require('express');
var router = express.Router();



router.get('/year', function(req, res) {

  const date = new Date();
  res.json({year: Date.getFullYear()})
});

module.exports = router;
