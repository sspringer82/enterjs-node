const express = require('express');
const bodyParser = require('body-parser');
const todoRouter = require('./todo');
const logger = require('./logger');

const app = express();

logger(app);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/todo', todoRouter);

app.listen(8080, () => console.log('server is listening'));
