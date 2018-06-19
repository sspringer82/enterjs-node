const morgan = require('morgan');
const { createWriteStream } = require('fs');
const path = require('path');

function logger(app) {
  const accessLogStream = createWriteStream(
    path.join(__dirname, 'application.log'),
    { flags: 'a' },
  );
  app.use(morgan('combined', { stream: accessLogStream }));
}

module.exports = logger;
