const logRequest = (req, res, next) => {
  console.log('There is a request to the path:', req.path);
  next();
}

module.exports = logRequest;