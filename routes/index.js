var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("products");
});
router.get('/contactus', function(req, res, next) {
  res.render("contactus");
});
router.get('/uni', function(req, res, next) {
  res.render("uni");
});

router.get('/products', function(req, res, next) {
  res.send("he");
});

module.exports = router;
