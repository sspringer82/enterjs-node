const express = require('express');
const Router = express.Router;

const router = Router();

router.get('/', (req, res) => {
  res.send(['get up', 'eat', 'sleep']);
});

module.exports = router;
