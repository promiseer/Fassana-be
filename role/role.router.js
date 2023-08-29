const express = require("express");
const { authenticateToken, isAdmin } = require("../utils/jwt");
const router = express.Router();
const roleController = require("../role/role.controller");

router.get("/getRoles", async (request, response) => {
  const result = await roleController.getAllRoles(request);
  return response.json(result);
});
router.post(
  "/createRole",
  // authenticateToken,
  // isAdmin,
  async (request, response) => {
    const result = await roleController.createRole(request);
    return response.json(result);
  }
);

router.put(
  "/updateRole/:roleId",
  authenticateToken,
  // isAdmin,
  async (req, res) => {
    const result = await roleController.updateRole(req);
    return res.json(result);
  }
);
router.delete(
  "/deleteRole/:roleId",
  authenticateToken,
  isAdmin,
  async (req, res) => {
    const result = await roleController.deleteRole(req);
    return res.json(result);
  }
);

module.exports = router;
