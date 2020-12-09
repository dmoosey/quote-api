const express = require('express'),
      router = express.Router(),
      { quotes } = require('../data'),
      { getRandomElement } = require('../utils');

/*  GET /quotes/random - Return a random quote  */
router.get('/quotes/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send({quote: randomQuote});
})

/*  GET /quotes - Return all quotes  */
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

/*  POST /quotes - Add a new quote  */
router.post('/quotes', (req, res) => {
    const quote = req.query.quote,
          person = req.query.person;
    if(!quote || !person){
        return res.status(404).send()
    }
    quotes.push(req.query);
    res.send({quote: req.query});
})

module.exports = router;