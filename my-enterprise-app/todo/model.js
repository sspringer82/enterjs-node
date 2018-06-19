const model = ['get up', 'eat', 'sleep'];

function getList() {
  return new Promise((resolve, reject) => {
    resolve(model);
  });
}

module.exports = {
  getList,
};
