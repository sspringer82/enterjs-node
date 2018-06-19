const { createServer } = require('spdy');
const fs = require('fs');

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

const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.cert'),
};
createServer(options, app).listen(8080, () =>
  console.log('server is listening'),
);
