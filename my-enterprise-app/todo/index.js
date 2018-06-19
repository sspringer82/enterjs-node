const express = require('express');

const { listAction, formAction, saveAction } = require('./controller');
const middleware = require('./middleware');

const Router = express.Router;

const router = Router();

router.use(middleware);
router.get('/', listAction);
router.get('/form', formAction);
router.post('/save', saveAction);

module.exports = router;

// github.com/sspringer82/enterjs-node
