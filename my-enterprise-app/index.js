const express = require('express');
const todoRouter = require('./todo');

const app = express();

app.use('/todo', todoRouter);

app.listen(8080, () => console.log('server is listening'));
