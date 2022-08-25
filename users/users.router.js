const express = require("express");
// const upload = require("../middleware/multer");
const router = express.Router();
const userController = require("./users.controller");

router.get("/getAllUser", authenticateToken, async (request, response) => {
  const result = await userController.getAllusers(request);
  return response.json(result);
});
router.get("/getUser", authenticateToken, async (request, response) => {
  const result = await userController.getUser(request);
  return response.json(result);
});

router.get("/updateUser", authenticateToken, async (request, response) => {
  const result = await userController.updateUser(request);
  return response.json(result);
});
router.get("/deleteUser", authenticateToken, async (request, response) => {
  const result = await userController.deleteUser(request);
  return response.json(result);
});

module.exports = router;
