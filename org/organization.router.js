const express = require("express");
const { authenticateToken, isAdmin } = require("../utils/jwt");
const router = express.Router();
const organizationController = require("./organization.controller");

router.get("/getOrgs", authenticateToken, async (request, response) => {
  const result = await organizationController.getAllOrgs(request);
  return response.json(result);
});
router.post(
  "/createOrg",
  authenticateToken,
  // isAdmin,
  async (request, response) => {
    const result = await organizationController.createOrg(request);
    return response.json(result);
  }
);

router.post(
  "/invite",
  authenticateToken,
  // isAdmin,
  async (request, response) => {
    const result = await organizationController.invite(request);
    return response.json(result);
  }
);
router.post(
  "/join",
  authenticateToken,
  // isAdmin,
  async (request, response) => {
    const result = await organizationController.joinOrg(request);
    return response.json(result);
  }
);

router.put(
  "/updateOrg/:orgId",
  authenticateToken,
  isAdmin,
  async (req, res) => {
    const result = await organizationController.updateOrg(req);
    return res.json(result);
  }
);
router.delete(
  "/deleteOrg/:orgId",
  authenticateToken,
  isAdmin,
  async (req, res) => {
    const result = await organizationController.deleteOrg(req);
    return res.json(result);
  }
);

module.exports = router;
