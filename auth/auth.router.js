const express = require("express");
// const upload = require("../middleware/multer");
const router = express.Router();
const userController = require("./auth.controller");

// API for Employee register.
router.post("/signup", async (req, res) => {
  const result = await userController.createUser(req);
  return res.send(result);
});

// API for Employee login.
router.post("/login", async (req, res) => {
  const result = await userController.loginUser(req);
  return res.json(result);
});

module.exports = router;
