const { getList } = require('./model');
const render = require('./view');

async function listAction(req, res) {
  res.render(__dirname + '/views/list.ejs', { tasks: await getList() });
}

module.exports = {
  listAction,
};
