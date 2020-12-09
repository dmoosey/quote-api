const express = require('express'),
      router = express.Router(),
      { quotes } = require('../data'),
      { getRandomElement } = require('../utils');

router.get('/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
})
module.exports = router;