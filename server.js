const express = require('express'),
      app = express(),
      router = require('./routes/index');

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})

