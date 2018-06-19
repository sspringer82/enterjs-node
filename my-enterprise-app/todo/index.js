const express = require('express');

const { listAction } = require('./controller');
const middleware = require('./middleware');

const Router = express.Router;

const router = Router();

router.use(middleware);
router.get('/', listAction);

module.exports = router;

// github.com/sspringer82/enterjs-node
