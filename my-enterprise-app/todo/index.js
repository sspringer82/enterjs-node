const express = require('express');

const { listAction } = require('./controller');

const Router = express.Router;

const router = Router();

router.get('/', listAction);

module.exports = router;

// github.com/sspringer82/enterjs-node
