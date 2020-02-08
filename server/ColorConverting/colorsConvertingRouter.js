var express = require('express');
var convertingHandler = require('./converting_functions');
var ServerResponse = require('../ServerResponse').default;

var router = express.Router();

router.get('/:type/:color', function(req, res) {
  let {color, type} = req.params;
  console.log(`Request:\n type:${type} | color: ${color}`);
  let answer;
  switch (type) {
    case 'XTERM':
      answer = convertingHandler.fromHexToXTerm(color);
      break;
    case 'RGBA':
      answer = convertingHandler.fromHexToRGB(color);
      break;
    case 'HSL':
      answer = convertingHandler.fromHexToRGB(color);
      break;
    case 'RGBVALUES':
      answer = convertingHandler.fromHexToRGBValues(color);
      break;
    case 'BRIGHTNESSLEVEL':
      answer = convertingHandler.getBrightnessLevel(color);
      break;
    default:
      answer = convertingHandler.fromHexToXTerm(color);
      break;
  }
  let consoleColor = getConsoleColorByStatus(answer.status);
  console.log(
    `Respond: \n status:${consoleColor}${answer.status}\x1b[0m | type: ${
      answer.type
    } | value: ${JSON.stringify(answer.value)}`,
  );
  res.json(answer);
});

const getConsoleColorByStatus = status => {
  switch (status) {
    case 'SUCCEED':
      return '\x1b[36m';
    case 'FAILED':
      return '\x1b[31m';
    default:
      return '\x1b[37m';
  }
};

module.exports = router;
