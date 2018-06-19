const { getList } = require('./model');
const render = require('./view');

async function listAction(req, res) {
  res.render(__dirname + '/views/index.ejs', { name: 'Klaus' });

  /*const list = await getList();

  res.send(render(list));*/
}

module.exports = {
  listAction,
};
