const express = require("express");
const router = express.Router();
const userController = require("./users.controller");
const { authenticateToken, isAdmin } = require("../utils/jwt");

router.get(
  "/getAllUser",
  authenticateToken,
  // isAdmin,
  async (request, response) => {
    const result = await userController.getAllusers(request);
    return response.json(result);
  }
);
router.get("/getUser", authenticateToken, async (request, response) => {
  const result = await userController.getUser(request);
  return response.json(result);
});

router.put("/updateUser", authenticateToken, async (request, response) => {
  const result = await userController.updateUser(request);
  return response.json(result);
});
router.delete("/deleteUser", authenticateToken, async (request, response) => {
  const result = await userController.deleteUser(request);
  return response.json(result);
});

module.exports = router;