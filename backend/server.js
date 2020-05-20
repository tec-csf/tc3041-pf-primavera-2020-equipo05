'use strict'
const express = require('express');
const app = express();
const propierties = require('./properties');
const DB = require('./db');
// init DB
DB();

const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });



app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/api', router);

router.get('/', (req, res) => {
  res.send('Hello from home');
});

router.get('/home', (req, res) => {
  res.send('Hello from another home')
  console.log("Estas en home hijo y tambien estas conectado jeje bai")
});

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));

