const model = [
  { id: 1, title: 'get up', status: 'done' },
  { id: 2, title: 'eat', status: 'open' },
  { id: 3, title: 'sleep', status: 'open' },
];

function getList() {
  return new Promise((resolve, reject) => {
    resolve(model);
  });
}

function save(data) {
  const todo = {
    id: Math.max.apply(null, model.map(todo => todo.id)) + 1,
    title: data.title,
    status: data.status,
  };
  model.push(todo);
  return Promise.resolve();
}

module.exports = {
  getList,
  save,
};
