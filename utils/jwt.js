const jwt = require("jsonwebtoken");
require("dotenv").config();

function generateAccessToken(username) {
  return jwt.sign(
    { _id: username._id, role: username.role },
    process.env.secret_key,
    {
      expiresIn: "18000s", //expires IN 5hours
    }
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    return res.sendStatus(401).json({ error: true, message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.secret_key, (err, data) => {
    if (err)
      return res.status(401).json({ error: true, message: "Unauthorized" });
    req.token_data = data;
    next();
  });
}

function isMentor(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    return res.sendStatus(401).json({ error: true, message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.secret_key, (err, data) => {
    if (err)
      return res.status(401).json({ error: true, message: "Unauthorized" });
    if ((data.role = 0)) next();
    else return res.status(401).json({ error: true, message: "Unauthorized" });
  });
}
function isUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    return res.sendStatus(401).json({ error: true, message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.secret_key, (err, data) => {
    if (err)
      return res.status(401).json({ error: true, message: "Unauthorized" });
    if ((data.role = 1)) next();
    else return res.status(401).json({ error: true, message: "Unauthorized" });
  });
}
module.exports = { generateAccessToken, authenticateToken };
