module.exports = (req, res, next) => {
  console.log(Date.now() + ' ' + req.url);
  next();
};
