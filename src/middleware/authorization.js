module.exports = function authorization(req, res, next) {
  if (req.headers.authorization !== "1222333") {
    return res.sendStatus(401);
  }

  next();
};
