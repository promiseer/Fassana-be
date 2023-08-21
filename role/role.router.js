const express = require("express");
const { authenticateToken, isMentor } = require("../utils/jwt");
const router = express.Router();
const roleController = require("../role/role.controller");

router.get("/getRoles", async (request, response) => {
  const result = await roleController.getAllRoles(request);
  return response.json(result);
});
router.post(
  "/createRole",
  // authenticateToken,
  // isMentor,
  async (request, response) => {
    const result = await roleController.createRole(request);
    return response.json(result);
  }
);

router.put(
  "/updateRole/:roleId",
  authenticateToken,
  isMentor,
  async (req, res) => {
    const result = await roleController.updateRole(req);
    return res.json(result);
  }
);
router.delete(
  "/deleteRole/:roleId",
  authenticateToken,
  isMentor,
  async (req, res) => {
    const result = await roleController.deleteRole(req);
    return res.json(result);
  }
);

module.exports = router;
