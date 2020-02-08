var express = require('express');
var ServerResponse = require('../ServerResponse').default;
var bookmarkList = require('./bookmarkList').default;

var router = express.Router();

router.get('/getAll', function(req, res) {
  console.log('Request: \n getBookmark');
  res.json(bookmarkList);
});

module.exports = router;
