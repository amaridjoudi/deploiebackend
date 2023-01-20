var express = require('express');
var router = express.Router();



router.get('/year', function(req, res) {

  const date = new Date().getFullYear().toString();
  res.json({year: date})
});

module.exports = router;
