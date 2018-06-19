const express = require('express');
const todoRouter = require('./todo');
const logger = require('./logger');

const app = express();

logger(app);

app.use('/todo', todoRouter);

app.listen(8080, () => console.log('server is listening'));
