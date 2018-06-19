const { getList, save } = require('./model');
const render = require('./view');

async function listAction(req, res) {
  res.render(__dirname + '/views/list.ejs', { tasks: await getList() });
}

function formAction(req, res) {
  res.render(__dirname + '/views/form.ejs');
}

async function saveAction(req, res) {
  await save(req.body);
  res.redirect('/todo');
}

module.exports = {
  listAction,
  formAction,
  saveAction,
};
