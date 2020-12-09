const express = require('express'),
      router = express.Router(),
      { quotes } = require('../data'),
      { getRandomElement } = require('../utils');

router.get('/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
})

router.get('/quotes', (req, res) => {
    const person = req.query.person;
    if(person){
        const newArr = [];
        for(const quote in quotes){
            if(quotes[quote].person === person){
                newArr.push(quotes[quote]);
            }
        }
        res.send({quotes: newArr});
    }
    res.send({quotes: quotes});
})
module.exports = router;