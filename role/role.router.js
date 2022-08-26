const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const roleController = require("../role/role.controller");

router.get("/getRoles", async (request, response) => {
  const result = await roleController.getAllRoles(request);
  return response.json(result);
});
router.post("/createRole", async (request, response) => {
  const result = await roleController.createRole(request);
  return response.json(result);
});

router.put("/updateRole/:roleId", authenticateToken, async (req, res) => {
  const result = await roleController.updateRole(req);
  return res.json(result);
});
router.delete("/deleteRole/:roleId", authenticateToken, async (req, res) => {
  const result = await roleController.deleteRole(req);
  return res.json(result);
});

module.exports = router;
