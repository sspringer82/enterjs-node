const { getList } = require('./model');
const render = require('./view');

async function listAction(req, res) {
  res.render(__dirname + '/views/list.ejs', { tasks: await getList() });
}

function saveAction(req, res) {
  console.log(req.body.name);
  res.redirect('/todo');
}

module.exports = {
  listAction,
};
