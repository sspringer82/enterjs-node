const { getList } = require('./model');
const render = require('./view');

async function listAction(req, res) {
  const list = await getList();

  res.send(render(list));
}

module.exports = {
  listAction,
};
