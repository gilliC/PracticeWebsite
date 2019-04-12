const express = require('express');
const path = require('path');

const app = express();
var colorConverting = require('./server/ColorConverting/colorsConvertingRouter');
var bookmark = require('./server/Bookmark/bookmarkRouter');
let port = process.env.PORT || 5000;

app.use('/colorConverting', colorConverting);
app.use('/bookmark', bookmark);
app.use('/PracticeWebsite/', express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Server is listening on port: ${port}`);
});
