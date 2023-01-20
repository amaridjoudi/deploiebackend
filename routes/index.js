var express = require('express');
var router = express.Router();


const lien = 'deploiebackend-pp10q1zut-amaridjoudi.vercel.app'

router.get('/lien', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
