const jwt = require("jsonwebtoken");
const ExpressError = require("./appError");
require("dotenv").config();

function generateAccessToken(userData, expiresIn = process.env.JWT_EXPIRES) {
  return jwt.sign(
    { _id: userData._id, role: userData.role },
    process.env.JWT_SECRET,
    {
      expiresIn
    }
  );
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined || !authHeader.split(" ")[1]) {
    return res.sendStatus(401).json({ error: true, message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err)
      return res.status(401).json({ error: true, message: "Unauthorized" });
    req.token_data = data;
    next();
  });
}

function isAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    return res.sendStatus(401).json({ error: true, message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err)
      return res.status(401).json({ error: true, message: "Unauthorized" });
    if ((data.role == "admin")) next();
    else return res.status(401).json({ error: true, message: "Unauthorized" });
  });
}
function isUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader === undefined) {
    return res.sendStatus(401).json({ error: true, message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err)
      return res.status(401).json({ error: true, message: "Unauthorized" });
    if ((data.role == "user")) next();
    else return res.status(401).json({ error: true, message: "Unauthorized" });
  });
}

module.exports = { generateAccessToken, authenticateToken, isAdmin, isUser };
