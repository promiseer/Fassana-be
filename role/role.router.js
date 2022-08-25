const express = require("express");
const { authenticateToken } = require("../utils/jwt");
const router = express.Router();
const roleController = require("../role/role.controller");

router.get("/getRoles", async (request, response) => {
  const result = await roleController.getUnclaimedLeads(request);
  return response.json(result);
});
router.post("/createRoles", async (request, response) => {
  const result = await roleController.createForm(request);
  return response.json(result);
});

router.put("/updateRoles/:roleId", authenticateToken, async (req, res) => {
  const result = await roleController.claimLead(req);
  return res.json(result);
});
router.put("/deleteRoles/:roleId", authenticateToken, async (req, res) => {
  const result = await roleController.claimLead(req);
  return res.json(result);
});

module.exports = router;
