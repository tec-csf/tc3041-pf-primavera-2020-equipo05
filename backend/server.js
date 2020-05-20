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

app.use(router);
app.listen(propierties.PORT, () => console.log(`Server runing on port ${propierties.PORT}`));

app.get('/home'), async (req, res) => {
    console.log("Estas en home hijo y tambien estas conectado jeje bai")
}